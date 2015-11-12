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
      <form className="form-inline username-form" onSubmit={(e) => this.submitName(e) }>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">Name</div>
            <input placeholder="Jack" className="form-control" type="text" value={this.state.username} onChange={(e) => this.updateName(e)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}
