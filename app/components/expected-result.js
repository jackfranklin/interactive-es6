import React from 'react';

export default class ExpectedResult extends React.Component {
  render() {
    if (!this.props.results) return null;

    return (
      <div>
        <p>The below values are the values expected by the site.</p>
        <p>You should edit the above code such that the values shown in the <code>result</code> object match what the site is expecting</p>
        <p>When you're ready to test yourself, press the "Evalute" button.</p>
        <pre><code>
          { JSON.stringify(this.props.results, null, 2) }
        </code></pre>
      </div>
    )
  }
}
