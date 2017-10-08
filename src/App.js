import React, { Component } from 'react';
import {State} from './State';

function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
  element.style.height = window.screen.availHeight;
  console.log(element.style);
}

class Textarea extends Component {
  componentDidUpdate() {
    console.log(123);
    let node = this.textarea;

    node.focus();
    const textNode = node.firstChild;
    const caret = this.props.cursorPosition;
    console.log(caret);
    // debugger
    const range = document.createRange();
    range.setEnd(textNode, caret);
    range.setStart(textNode, caret);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  render() {
    return (
      <div
        className="textarea"
        autoFocus
        tabIndex="0"
        contentEditable="true"
        // onDoubleClick={(e)=>{launchIntoFullscreen(document.getElementById('root'))}}
        onKeyPress={this.props.handleKeyDown}
        ref={(input) => this.textarea = input}
        suppressContentEditableWarning={true} >
        {this.props.textContent}
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.domainState = new State();
    this.state = this.domainState.getUIState();

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    e.preventDefault();
    this.domainState.addText(e.key);
    this.setState(this.domainState.getUIState());
  }

  render() {
    return (
      <div className="app">
        <Textarea handleKeyDown={this.handleKeyDown} handleKeyUp={this.handleKeyUp} textContent={this.state.textContent} cursorPosition={this.domainState.getUIState().cursorPosition}/>
      </div>
    );
  }
}
