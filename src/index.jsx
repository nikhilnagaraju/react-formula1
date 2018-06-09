// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from 'views/app';
import './main.scss';

let targetElement: Element = document.getElementById('app');

if (!targetElement) {
  targetElement = document.createElement('main');
  targetElement.id = 'app';
  document.body.insertAdjacentElement('afterbegin', targetElement);
}

ReactDOM.render(<App />, targetElement);

if (module.hot) module.hot.accept();
