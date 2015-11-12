import 'fetch'
import promise from 'es6-promise';
promise.polyfill();

import 'npm:codemirror@5.8.0/mode/javascript/javascript';

import { render } from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import Index from './components/index';

import Scopes from './components/scopes';
import Destructuring from './components/destructuring';
import Classes from './components/classes';
import Functions from './components/functions';
import Arrows from './components/arrows';
import Promises from './components/promises';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>ES6 Workshop</h1>
          <hr />
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

render(
  (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="" component={App}>
        <Route path="/" component={Index}></Route>
        <Route path="/scopes" component={Scopes}></Route>
        <Route path="/destructuring" component={Destructuring}></Route>
        <Route path="/classes" component={Classes}></Route>
        <Route path="/functions" component={Functions}></Route>
        <Route path="/arrows" component={Arrows}></Route>
        <Route path="/promises" component={Promises}></Route>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
