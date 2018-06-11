// @flow
import { GET_SEASONS_FAILED, GET_SEASONS_SUCCESS } from 'actions/f1-seasons';
import { GET_STANDINGS_DRIVER_SUCCESS } from 'actions/f1-standings/drivers';

export const f1SeasonsReducer = (state = { seasons: {} }, action) => {
  switch (action.type) {
    case GET_SEASONS_SUCCESS:
      return { ...state, count: action.seasons.length };

    case GET_STANDINGS_DRIVER_SUCCESS: {
      const year = Object.keys(action.data)[0];
      const driver = action.data[year].StandingsLists[0].DriverStandings[0].Driver;

      const newState = JSON.parse(JSON.stringify(state));
      // const newState = { ...state };
      newState.seasons[year] = { driver };
      return newState;
    }

    case GET_SEASONS_FAILED:
      return action.data;

    default:
      return state;
  }
};
