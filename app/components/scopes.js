import React from 'react';

import Editor from './editor';
import Challenge from './challenge';

import { Link } from 'react-router';

export default class Scopes extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <div className="col-md-12">
          <Challenge
            results="scopes/1.js"
            fixture="scopes/1.js"
            title="The problem with variables"
          >
            <p>The problem with <code>var</code> is that it is scoped to functions, so they leak out of things like conditionals. This can create confusing code, as demonstrated below.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            fixture="scopes/2.js"
            title="Let doesn't have such a problem"
          >
            <p>Notice that when you run this code you get an error. Why is that? Don't worry about fixing the error, but notice how the behaviour of <code>let</code> differs from that of <code>var</code>.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            fixture="scopes/3.js"
            title="We can also create constants"
          >
            <p>Notice that when you run this code you get an error. Why is that? Don't worry about fixing the error, but notice how we are not allowed to modify a constant.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="scopes/4.js"
            fixture="scopes/4.js"
            title="We can sort of edit constants though..."
          >
            <p>When a constant is an object, you can modify its values, but you can't redefine the entire object.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/destructuring">Ready to move on? Let's talk destructuring...</Link>
        </div>
      </div>
    );
  }
}
