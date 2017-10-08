import Assert from 'assert';
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
  Assert.ok(state != null && state != undefined);
});

//it('puts adds text to the state', () => {
//
//});
