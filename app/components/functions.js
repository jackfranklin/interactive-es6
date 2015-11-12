import React from 'react';

import Editor from './editor';
import Challenge from './challenge';

import { Link } from 'react-router';

export default class Functions extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <div className="col-md-12">
          <Challenge
            results="functions/1.js"
            fixture="functions/1.js"
            title="Defining functions in objects"
          >
            <p>We've got a shorter way to define functions. Update the object below to use it and call the new method.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="functions/2.js"
            fixture="functions/2.js"
            title="Default function arguments"
          >
            <p>If a function isn't given a value, you can tell it what it should use.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="functions/3.js"
            fixture="functions/3.js"
            title="Unlimited arguments"
          >
            <p>Sometimes you just want to take any number of arguments and get them as an array.</p>
            <p>The spread operator (<code>...</code>) lets us do this.</p>
            <p>This is much nicer than working with the inbuilt <code>arguments</code> object.</p>

          </Challenge>
        </div>

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/arrows">Regular functions are dull, ready for some arrow functions?!</Link>
        </div>
      </div>
    );
  }
}
