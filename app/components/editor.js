import React from 'react';
import CodeMirror from 'react-codemirror';

export default class  extends React.Component {

  constructor(props) {
    super(props);
    this.state = { src: this.props.src }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.src !== this.state.src) {
      this.setState({ src: newProps.src });
    }
  }

  updateState(src) {
    this.props.updateSource(src);
  }

  render() {
    const options = {
      mode: 'javascript',
      theme: 'solarized',
      lineNumbers: true,
      lineWrapping: true
    }
    return (
      <CodeMirror
        options = { options }
        value = {this.state.src}
        onChange = { (src) => this.updateState(src) }
      />
    )
  }
}
