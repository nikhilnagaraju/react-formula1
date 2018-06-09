import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import HelloWorld from 'components/hello-world/hello-world';
import store from 'store';

export default () => (
  <Fragment>
    <Provider store={store}>
      <HelloWorld>
        <h1>React Boilerplate...</h1>
        <p>Welcome to the jungle!</p>
      </HelloWorld>
    </Provider>
  </Fragment>
);
