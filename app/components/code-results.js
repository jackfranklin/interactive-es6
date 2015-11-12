import React from 'react';

export default class CodeResults extends React.Component {
  renderArray(ary, success) {
    const cssClass = 'list-group-item list-group-item-' + (success ? 'success' : 'danger');

    return ary.map(function(result) {
      return (
        <li key={result.key} className={cssClass}>
          Expected <code>{result.key}</code> to equal <code>{result.expected}</code> and it equaled <code>{result.actual}</code>.
          <span className="badge">
            { success === true ? 'Success! ' : 'Failure! ' }
          </span>
        </li>
      )
    });
  }

  renderResults() {
    return this.renderArray(this.props.results.passed, true).concat(this.renderArray(this.props.results.failed, false));
  }
  render() {
    if (!this.props.results) return null;

    console.log('got here', this.props.results);

    return <ul className="list-group">{ this.renderResults() }</ul>
  }
}
