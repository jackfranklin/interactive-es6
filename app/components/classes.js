import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Classes extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="classes" />

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/functions">Time for some functions...</Link>
        </div>
      </div>
    );
  }
}
