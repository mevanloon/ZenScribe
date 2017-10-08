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
  onKeyUp(e) {
    if(e.keyCode === 13)
      console.log(e.target.innerText);
  }
  render() {
    return (
      <div className="textarea"  autoFocus tabIndex="0" contentEditable="true" onDoubleClick={(e)=>{launchIntoFullscreen(document.getElementById('#root'))}} onKeyUp={this.onKeyUp} ref={(input) => this.textarea = input}>
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = new State();
  }
  render() {
    return (
      <div className="app">
        <Textarea/>
      </div>
    );
  }
}
