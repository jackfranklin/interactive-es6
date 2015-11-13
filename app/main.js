import 'fetch'
import promise from 'es6-promise';
promise.polyfill();

import 'npm:codemirror@5.8.0/mode/javascript/javascript';

import { render } from 'react-dom';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Index from './components/index';

import Scopes from './components/scopes';
import Destructuring from './components/destructuring';
import Classes from './components/classes';
import Functions from './components/functions';
import Arrows from './components/arrows';
import Promises from './components/promises';

import Username from './components/username';

import Dashboard from './components/dashboard';


const titleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

class App extends React.Component {

  challengeLinks() {
    return ['scopes', 'destructuring',
      'classes', 'functions',
      'arrows', 'promises'].map((feat) => {
        return <li key={feat}><Link to={`/${feat}`}>{titleCase(feat)}</Link></li>;
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">ES6 Workshop</a>
            </div>

            <Username />

            <div>
              <ul className="nav navbar-nav">
                { this.challengeLinks() }
              </ul>
            </div>

          </div>
        </nav>
        <div className="container">
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
        <Route path="/_dashboard" component={Dashboard}></Route>
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
