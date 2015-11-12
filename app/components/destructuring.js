import React from 'react';

import Feature from './feature';
import { Link } from 'react-router';

export default class Destructuring extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="destructuring" />

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/classes">Feeling keen? Up next it's classes...</Link>
        </div>
      </div>
    );
  }
}
