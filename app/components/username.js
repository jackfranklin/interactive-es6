import React from 'react';
import store from 'store';

export default class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: store.get('username') }
  }

  updateName(e) {
    this.setState({ username: e.target.value });
  }

  submitName(e) {
    e.preventDefault();
    store.set('username', this.state.username);
  }

  render() {
    return (
      <form className="navbar-form navbar-left" onSubmit={(e) => this.submitName(e) }>
        <div className="form-group">
          <input placeholder="Your Name" className="form-control" type="text" value={this.state.username} onChange={(e) => this.updateName(e)} />
        </div>
        <button type="submit" className="btn btn-default">Save</button>
      </form>
    )
  }
}
