import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Arrows extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="arrows" />

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/template-strings">Let's talk strings...</Link>
        </div>
      </div>
    );
  }
}
