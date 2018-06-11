// @flow
import { GET_RACES_FAILED, GET_RACES_SUCCESS } from 'actions/f1-races';
import { TRUNCATE_RACES } from 'actions/f1-races/f1-races.action';

export const f1RacesReducer = (state = {}, action) => {
  switch (action.type) {
    case TRUNCATE_RACES:
      return {};

    case GET_RACES_SUCCESS:
      return action.races;

    case GET_RACES_FAILED:
      return action.data;

    default:
      return state;
  }
};
