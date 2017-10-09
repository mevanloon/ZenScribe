import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Textarea from './components/Textarea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can add a character to the state', () => {
  const div = document.createElement('div');
  let app = ReactDOM.render(<App />, div);

  assert.ok(app.state.textContent === "");
  app.updateTextContent("a")
  assert.ok(app.state.textContent === "a");
});

it('can add multiple chacters to the state', () => {
  const div = document.createElement('div');
  let app = ReactDOM.render(<App />, div);

  assert.ok(app.state.textContent === "");
  app.updateTextContent("a")
  assert.ok(app.state.textContent === "a");
  app.updateTextContent("abcdef")
  assert.ok(app.state.textContent === "abcdef");
});

it('can add emoji to the state', () => {
  const div = document.createElement('div');
  let app = ReactDOM.render(<App />, div);

  assert.ok(app.state.textContent === "");
  app.updateTextContent("😎")
  assert.ok(app.state.textContent === "😎");
});
