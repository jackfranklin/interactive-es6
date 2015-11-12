import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Functions extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="functions" />

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/arrows">Regular functions are dull, ready for some arrow functions?!</Link>
        </div>
      </div>
    );
  }
}
