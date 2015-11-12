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
            results="arrows/1.js"
            fixture="arrows/1.js"
            title="For small functions, arrow functions are a much nicer syntax"
          >
            <p>This code works as is, but study arrow functions closely! You're going to have to type out lots of them...</p>
            <p>Note how we can omit the <code>return</code> keyword from a single line arrow function.</p>
            <p>However, when we split an arrow function over multiple lines we add braces and the <code>return</code> keyword.</p>

          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="arrows/2.js"
            fixture="arrows/2.js"
            title="Passing in arrow functions"
          >
            <p>Arrow functions are really nice for passing into functions.</p>

          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="arrows/3.js"
            fixture="arrows/3.js"
            title="The scope of arrow functions"
          >
            <p>The code below errors. Replace the function with an arrow function and see what happens.</p>
            <p>Can you explain why an arrow function makes the test pass?</p>

          </Challenge>
        </div>

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/promises">Ready to move on? I <em>promise</em> it's nearly over...</Link>
        </div>
      </div>
    );
  }
}
