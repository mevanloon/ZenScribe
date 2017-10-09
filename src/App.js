import React, { Component } from 'react';
import Textarea from './components/Textarea';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textContent: "", cursorPosition: 0 };

    this.updateTextContent = this.updateTextContent.bind(this);
  }

  updateTextContent(value) {
    this.setState( {textContent: value} );
  }

  render() {
    return (
      <div className="app">
        <Textarea textContent={this.state.textContent} updateTextContent={this.updateTextContent}/>
      </div>
    );
  }
}
