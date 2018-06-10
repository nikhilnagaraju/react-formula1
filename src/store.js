import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { f1SeasonsReducer } from 'reducers/f1-seasons';

export const store = createStore(
  combineReducers({ f1Seasons: f1SeasonsReducer }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
