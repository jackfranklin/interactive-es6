import React from 'react';

import Editor from './editor';
import Challenge from './challenge';

import { Link } from 'react-router';

export default class Arrows extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <div className="col-md-12">
          <Challenge
            results="promises/1.js"
            fixture="promises/1.js"
            title="Promises are a nice way to deal with async things"
          >
            <p>Here you're expected to provide a Promise that will <em>resolve</em> to the expected value</p>
            <p>The code provided works, and you should study it closely.</p>

          </Challenge>
        </div>

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/promises">Ready to move on? I <em>promise</em> it's nearly over...</Link>
        </div>
      </div>
    );
  }
}
