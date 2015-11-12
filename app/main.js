import 'fetch'
import 'npm:codemirror@5.8.0/mode/javascript/javascript';

import { render } from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import Index from './components/index';

import Scopes from './components/scopes';
import Destructuring from './components/destructuring';
import Classes from './components/classes';
import Functions from './components/functions';

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
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
