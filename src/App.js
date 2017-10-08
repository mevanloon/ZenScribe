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
  doFocus() {
    this.textarea.focus();
  }

  componentDidMount() {
    this.doFocus();
  }

  render() {
    return (
      <div
        className="textarea"
        autoFocus
        tabIndex="0"
        contentEditable="true"
        onDoubleClick={(e)=>{launchIntoFullscreen(document.getElementById('root'))}}
        onKeyUp={this.onKeyUp}
        onKeyPress={this.props.handleTextareaKeyUp}
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

    this.handleTextareaKeyUp = this.handleTextareaKeyUp.bind(this);
  }

  handleTextareaKeyUp(e) {
    e.preventDefault();
    this.domainState.addText(e.key);
    this.setState(this.domainState.getUIState());
  }

  render() {
    return (
      <div className="app">
        <Textarea handleTextareaKeyUp={this.handleTextareaKeyUp} textContent={this.state.textContent}/>
      </div>
    );
  }
}
