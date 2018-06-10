import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { f1SeasonsReducer } from 'reducers/f1-seasons';
// import { f1StandingsDriversReducer} from 'reducers/f1-standings/drivers/f1-standings-drivers.reducer';

export const store = createStore(
  combineReducers({
    f1Seasons: f1SeasonsReducer,
    // f1StandingsDrivers: f1StandingsDriversReducer,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
