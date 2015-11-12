import React from 'react';

import Editor from './editor';
import Challenge from './challenge';

import { Link } from 'react-router';

export default class Classes extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <div className="col-md-12">
          <Challenge
            results="classes/1.js"
            fixture="classes/1.js"
            title="The class syntax"
          >
            <p>The syntax for defining classes is pretty similar to other languages.</p>
            <p>The <code>constructor</code> method is called when we create a new instance.</p>
            <p>Note the shorter syntax for defining methods too.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/classes">Feeling keen? Up next it's classes...</Link>
        </div>
      </div>
    );
  }
}
