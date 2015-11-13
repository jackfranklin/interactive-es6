import React from 'react';
import pusher from '../pusher';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pingsForHelp: [],
      activity: []
    };
  }

  componentWillMount() {
    const helpChannel = pusher.subscribe('private-help-pings');
    const activityChannel = pusher.subscribe('private-activity-feed');

    helpChannel.bind('client-new-help', (data) => {
      data.resolved = false;
      this.setState({ pingsForHelp: this.state.pingsForHelp.concat([data]) });
    });

    activityChannel.bind('client-new-activity', (data) => {
      this.setState({ activity: this.state.activity.concat([data]) });
    });
  }

  resolve(e, index) {
    e.preventDefault();
    const pings = this.state.pingsForHelp.map((ping, pingIndex) => {
      if (index === pingIndex) {
        ping.resolved = true;
      }

      return ping;
    });

    this.setState({ pingsForHelp: pings });
  }

  renderRows() {
    return this.state.pingsForHelp.map((ping, index) => {
      if (ping.resolved === true) {
        return null;
      }

      return (
        <tr key={ping.log.length}>
          <td>{ping.user}</td>
          <td>{ping.challenge}</td>
          <td>{ping.log.length}</td>
          <td><pre><code>{JSON.stringify(ping.log[ping.log.length-1], null, 2)}</code></pre></td>
          <td><button className="btn btn-default" onClick={(e) => this.resolve(e, index)}>Resolve</button></td>
        </tr>
      );
    });
  }

  renderActivity() {
    return this.state.activity.map((activity) => {
      const wasSuccess = activity.res.error != true && activity.res.failed.length === 0;
      return (
        <tr key={JSON.stringify(activity.res)+activity.user}>
          <td>{activity.user}</td>
          <td>{activity.challenge}</td>
          <td>{ wasSuccess ? 'Success!' : 'Fail!' }</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h4>Pings for Help</h4>
        <table className="table table-striped">
          <thead>
            <tr><th>Name</th><th>Challenge</th><th>Attempts</th><th>Last</th><th>Resolve</th></tr>
          </thead>
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>

        <h4>Activity Feed</h4>
        <table className="table table-striped">
          <thead>
            <tr><th>Name</th><th>Challenge</th><th>Result</th></tr>
          </thead>
          <tbody>
            { this.renderActivity() }
          </tbody>
        </table>
      </div>
    );
  }
}
