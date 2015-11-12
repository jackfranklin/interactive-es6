import React from 'react';

import Editor from './editor';
import Challenge from './challenge';

import { Link } from 'react-router';

export default class Destructuring extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <div className="col-md-12">
          <Challenge
            results="destructuring/1.js"
            fixture="destructuring/1.js"
            title="Object destructuring is really succinct."
          >
            <p>If you want to pull a couple of properties of an object, you can use the object destructuring syntax.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="destructuring/2.js"
            fixture="destructuring/2.js"
            title="If a value in an object doesn't exist, it is set to undefined"
          >
            <p>If you try to destructure a value that doesn't exist, it is set to undefined</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="destructuring/3.js"
            fixture="destructuring/3.js"
            title="We can set a value to be used if there isn't one defined"
          >
            <p>You can set a default value too if the value doesn't exist</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="destructuring/4.js"
            fixture="destructuring/4.js"
            title="You can destructure inside function arguments"
          >
            <p>This code passes the test, but how could you rewrite it to be more succinct?</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Challenge
            results="destructuring/5.js"
            fixture="destructuring/5.js"
            title="It also works with arrays"
          >
            <p>By swapping the curly braces for square ones, we can pull values out of arrays.</p>
          </Challenge>
        </div>

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/classes">Feeling keen? Up next it's classes...</Link>
        </div>
      </div>
    );
  }
}
