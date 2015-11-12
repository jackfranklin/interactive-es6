import React from 'react';

import { Link } from 'react-router';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the interactive ES6 workshop</h2>
        <p>Click below to get started!</p>
        <Link to='/scopes'>Challenge 1: Scopes</Link>
      </div>
    );
  }
}
