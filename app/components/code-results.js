import React from 'react';

const ASSERTION_ERROR_MAPS = {
  'equal': (x, y) => {
    return (
      <span>Expected {valueOrUndefined(x)} to equal {valueOrUndefined(y)}</span>
    )
  }
};

function valueOrUndefined(x) {
  return (<code>{x == undefined ? 'undefined' : x}</code>);
}

function resultToString(result) {
  return ASSERTION_ERROR_MAPS[result.assertion].apply(null, result.args);
}

export default class CodeResults extends React.Component {
  renderResult(result) {
    const cssClass = 'list-group-item list-group-item-' + (result.passed ? 'success' : 'danger');

    const [actual, expected] = result.args;

    return (
      <li key={JSON.stringify(result)} className={cssClass}>
        { resultToString(result) }
        <span className="badge">
          { result.passed === true ? 'Success! ' : 'Failure! ' }
        </span>
      </li>
    )
  }
  renderResults() {
    return this.props.results.map(this.renderResult.bind(this));
  }
  render() {
    console.log('renderring', this.props.results);
    if (!this.props.results) return null;

    return <ul className="list-group">{ this.renderResults() }</ul>
  }
}
