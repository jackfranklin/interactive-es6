import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class TemplateStrings extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="template-strings" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/promises">Ready to move on? I <em>promise</em> it's nearly over...</Link>
        </div>
      </div>
    );
  }
}
