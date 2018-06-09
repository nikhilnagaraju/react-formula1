import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import hello from 'reducers/hello/hello.reducer';

export default createStore(
  combineReducers({ hello }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
