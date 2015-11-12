import { render } from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import Index from './components/index';

import Scopes from './components/scopes';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ES6 Workshop</h1>
        { this.props.children }
      </div>
    )
  }
}

render(
  (
    <Router>
      <Route path="" component={App}>
        <Route path="/" component={Index}></Route>
        <Route path="/scopes" component={Scopes}></Route>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
