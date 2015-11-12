import React from 'react';
import CodeMirror from 'react-codemirror';
import 'npm:codemirror@5.8.0/mode/javascript/javascript';

export default class  extends React.Component {

  constructor(props) {
    super(props);
    this.state = { src: 'var a = 2' };
  }

  updateState(src) {
    console.log('got new src', src);
  }

  render() {
    const options = {
      mode: 'javascript',
      theme: 'solarized',
      lineNumbers: true
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
