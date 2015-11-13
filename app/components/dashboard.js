import React from 'react';
import pusher from '../pusher';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pingsForHelp: [],
      activityStream: []
    };
  }

  componentWillMount() {
    const helpChannel = pusher.subscribe('help-pings');
    helpChannel.bind('new-help', (data) => {
      console.log('got cry for help', data);
    });
  }

  render() {
    return <p>Hello World</p>;
  }
}
