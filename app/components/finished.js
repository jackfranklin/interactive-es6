import React from 'react';

export default class Finished extends React.Component {
  render() {
    return (
      <div>
        <h2>You're finished! Congratulations.</h2>
        <p>Want more? I <strong>highly recommend</strong> <a href="http://exploringjs.com/">ExploringJS</a>, a free online book on ES6.</p>
        <p>I also blog lots on ES6 at <a href="http://javascriptplayground.com/">JavaScript Playground</a>.</p>
        <p>You can email me on jack at pusher dot com, or <a href="http://twitter.com/Jack_Franklin">tweet me too.</a></p>

        <h2>This Site</h2>

        <p>Is an ES6, ReactJS application <a href="https://github.com/jackfranklin/interactive-es6">that's open source.</a></p>
        <p>I'd love some feedback on if it's any good or not...</p>
      </div>
    );
  }
}
