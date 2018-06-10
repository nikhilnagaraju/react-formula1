import { GET_STANDINGS_DRIVER_SUCCESS } from 'actions/f1-standings/drivers';

export const f1StandingsDriversReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STANDINGS_DRIVER_SUCCESS:
      return { ...state, ...action.data };

    default:
      return state;
  }
};
