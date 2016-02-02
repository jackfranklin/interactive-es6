import React from 'react';

import Evaluator from 'ecmascript-evaluator';
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
    // The evaluator returns either a fulfilled or rejected promise, but
    // always with the same result/error object, so we handle both here
    const handleResults = (results) => {
      if (results[0].error) {
        const { errorType, message } = results[0];
        this.setState({
          codeError: `${errorType}: ${message}`,
          evaluationLogResults: this.state.evaluationLogResults.concat([results]),
        });
      } else {
        this.setState({
          evalResults: results,
          evaluationLogResults: this.state.evaluationLogResults.concat([results])
        });
      }

      this.logActivity(results);
    }
    
    Evaluator.run(this.state.src).then(handleResults).catch(handleResults);
  }

  logActivity(res) {
    this.activityChannel.trigger('client-new-activity', {
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
          { !this.props.results && <p>Evaluate the code to see the results</p> }
          { this.renderError() }
          { !this.state.codeError && <CodeResults results={this.state.evalResults} />}

          <button
            disabled={this.state.evaluationLogResults.length < 1}
            className="btn btn-warning pull-right"
            onClick={(e) => this.handleHelp(e)}>I would like some help please :)</button>
        </div>
      </div>
    );
  }
}
