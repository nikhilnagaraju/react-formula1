import { GET_SEASONS_SUCCESS, GET_SEASONS_FAILED } from 'actions/f1-seasons';

export const f1SeasonsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SEASONS_SUCCESS:
      return action.seasons;

    case GET_SEASONS_FAILED:
      return action.data;

    default:
      return state;
  }
};
