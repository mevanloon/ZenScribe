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

it('adds text to the state', () => {
  const state = new State();
  state.addText("a");

  assert.ok(state.textContent === "a");
});

it('adds emoji to the state', () => {
  const state = new State();
  state.addText("😎");

  assert.ok(state.textContent === "😎");
});
