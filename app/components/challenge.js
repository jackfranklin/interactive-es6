import React from 'react';

import Editor from './editor';

import Evaluator from '../evaluator';

import CodeResults from './code-results';
import ExpectedResult from './expected-result';

export default class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: 'Loading...',
      codeError: false,
    };
  }

  componentDidMount() {
    fetch(`app/fixtures/${this.props.fixture}`).then((response) => {
      return response.text();
    }).then(this.updateSource.bind(this));

    if (this.props.results) {
      System.import(`app/results/${this.props.results}`).then((data) => {
        this.updateResults(data.result);
      });
    }
  }

  updateResults(results) {
    this.setState({ results });
  }

  updateSource(src) {
    this.setState({ src, codeError: false, evalResults: null });
  }


  evaluateCode(e) {
    e.preventDefault();
    const result = Evaluator.run(this.state.src, this.state.results);
    if (result.error) {
      this.setState({ codeError: result.message });
    } else {
      this.setState({ evalResults: result });
    }
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

          <Editor src={this.state.src} updateSource={(src) => this.updateSource(src) } />
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
        </div>
      </div>
    );
  }
}
