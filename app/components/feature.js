import React from 'react';

import Challenge from './challenge';

export default class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { features: [] }
  }

  componentWillMount() {
    System.import(`app/features/${this.props.feature}.js`).then((features) => {
      this.setState({ features: features.default });
    });
  }

  fixtureLocation(feature) {
    return `${this.props.feature}/${feature.index}.js`;
  }

  resultLocation(feature) {
    if (feature.hasResults) {
      return this.fixtureLocation(feature);
    } else {
      return null;
    }
  }

  renderFeature(feature) {
    return (
      <div className="col-md-12" key={feature.index}>
        <Challenge
          results = { this.resultLocation(feature) }
          fixture = { this.fixtureLocation(feature) }
          title = { feature.title }
        >{ feature.content ? feature.content : null }</Challenge>
      </div>
    )
  }


  render() {
    return (
      <div>
        { this.state.features.map((f) => this.renderFeature(f)) }
      </div>
    )
  }
}
