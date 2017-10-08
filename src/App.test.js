import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {State} from './State';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can create a state', () => {
  const state = new State();
  assert.ok(state != null && state != undefined);
});

it('adds character to the state', () => {
  const state = new State();
  state.addText("a");

  assert.ok(state.getUIState().textContent === "a");
});

it('adds multiple chacters to the state', () => {
  const state = new State();
  state.addText("a");
  state.addText("bcdefg");

  assert.ok(state.getUIState().textContent === "abcdefg");
});

it('adds emoji to the state', () => {
  const state = new State();
  state.addText("😎");

  assert.ok(state.getUIState().textContent === "😎");
});
