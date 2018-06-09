import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import f1Seasons from 'reducers/f1-seasons';

export default createStore(
  combineReducers({ f1Seasons }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
