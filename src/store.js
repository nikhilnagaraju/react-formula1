import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { f1SeasonsReducer } from 'reducers/f1-seasons';
import { f1RacesReducer } from 'reducers/f1-races';

/**
 * Create and export Redux store
 * @namespace window.__REDUX_DEVTOOLS_EXTENSION__
 */
export const store = createStore(
  combineReducers({
    f1Seasons: f1SeasonsReducer,
    f1Races: f1RacesReducer,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
