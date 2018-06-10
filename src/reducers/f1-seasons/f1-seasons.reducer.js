// @flow
import { GET_SEASONS_FAILED } from 'actions/f1-seasons';
import { GET_STANDINGS_DRIVER_SUCCESS } from 'actions/f1-standings/drivers';

export const f1SeasonsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STANDINGS_DRIVER_SUCCESS: {
      const year = Object.keys(action.data)[0];
      const driver = action.data[year].StandingsLists[0].DriverStandings[0].Driver;
      return { ...state, [year]: { driver } };
    }

    case GET_SEASONS_FAILED:
      return action.data;

    default:
      return state;
  }
};
