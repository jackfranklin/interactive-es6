import React from 'react';

import Evaluator from '../evaluator';
import Editor from './editor';

import CodeResults from './code-results';
import ExpectedResult from './expected-result';

import store from 'store';

import { subscribeToHelp, subscribeToActivity } from '../challenge-channels';

import { getChallenge, saveChallenge } from '../challenge-store';

const INITIAL_SOURCE = 'Loading...';

export default class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: INITIAL_SOURCE,
      codeError: false,
      evaluationLogResults: []
    };
  }


  resetFixture() {
    fetch(`app/fixtures/${this.props.fixture}`).then((response) => {
      return response.text();
    }).then((text) => this.updateSource(text));
  }

  setFixtureFromStorageOrDefault() {
    const fromStore = getChallenge(this.props.fixture);

    if (fromStore) {
      this.updateSource(fromStore);
    } else {
      this.resetFixture();
    }
  }

  componentDidMount() {

    this.setFixtureFromStorageOrDefault();

    if (this.props.results) {
      System.import(`app/results/${this.props.results}`).then((data) => {
        this.updateResults(data.result);
      });
    }

    this.helpChannel = subscribeToHelp();
    this.activityChannel = subscribeToActivity();
  }

  updateResults(results) {
    this.setState({ results });
  }

  updateSource(src, persist = false) {
    this.setState({ src, codeError: false, evalResults: null });

    if (persist && src !== INITIAL_SOURCE) {
      saveChallenge(this.props.fixture, src);
    }
  }


  evaluateCode(e) {
    e.preventDefault();
    const result = Evaluator.run(this.state.src, this.state.results);
    Evaluator.run(this.state.src, this.state.results).then((results) => {
      let grouped = { passed: [], failed: [] }

      results.forEach((res) => {
        if (res.success === false) grouped.failed.push(res);
        if (res.success) grouped.passed.push(res);
      });

      this.setState({
        evalResults: grouped,
        evaluationLogResults: this.state.evaluationLogResults.concat([grouped]),
      });

      this.logActivity(grouped);
    }).catch((err) => {
      const name = err.name ? err.name : 'Error';
      this.setState({
        codeError: `${name}: ${err.message}`,
        evaluationLogResults: this.state.evaluationLogResults.concat([err]),
      })
      this.logActivity(err);
    });
  }

  logActivity(res) {
    this.activityChannel.trigger('client-new-activity', {
      user: store.get('username'),
      challenge: this.props.fixture,
      res,
      src: this.state.src,
    });
  }

  handleHelp(e) {
    e.preventDefault();
    this.helpChannel.trigger('client-new-help', {
      user: store.get('username'),
      challenge: this.props.fixture,
      log: this.state.evaluationLogResults,
      src: this.state.src,
    });
  }

  renderError() {
    if (this.state.codeError === false) {
      return null;
    }

    return (
      <div>
        <h5>Error!</h5>
        <pre className="bg-danger">
          <code>{ this.state.codeError }</code>
        </pre>
      </div>
    );

  }

  render() {
    return (
      <div className="challenge">
        <div className="col-md-6">
          <h4>{ this.props.title }</h4>
          { this.props.children }

          <Editor src={this.state.src} updateSource={(src) => this.updateSource(src, true) } />
          <hr />
          <button
            className="btn btn-default btn-primary"
            type="submit"
            disabled={!this.state.src && !this.state.results}
            onClick={(e) => this.evaluateCode(e) }>Evaluate</button>
        </div>
        <div className="col-md-6">
          { this.renderError() }
          { this.props.results && <ExpectedResult results={this.state.results} />}
          { this.props.results && <CodeResults results={this.state.evalResults} />}

          <button
            disabled={this.state.evaluationLogResults.length < 1}
            className="btn btn-warning pull-right"
            onClick={(e) => this.handleHelp(e)}>I would like some help please :)</button>
        </div>
      </div>
    );
  }
}
