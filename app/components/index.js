import React from 'react';

import { Link } from 'react-router';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the interactive ES6 workshop</h2>
        <p>This app has a series of challenges for you to pass to learn ES6.</p>
        <p>The app also stores your changes to the code locally, so don't worry about refreshing; your work is safe!</p>
        <p>To start the challenges, enter your name in the box above.</p>
      </div>
    );
  }
}
