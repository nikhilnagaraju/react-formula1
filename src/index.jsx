// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'views/app';
import 'normalize.css';
import './main.scss';

let targetElement: Element = document.getElementById('app');

if (!targetElement) {
  // Create the target element only once
  targetElement = document.createElement('main');
  targetElement.id = 'app';
  document.body.insertAdjacentElement('afterbegin', targetElement);
}

ReactDOM.render(<App />, targetElement);

// Enable Hot Module Replacement
if (module.hot) module.hot.accept();
