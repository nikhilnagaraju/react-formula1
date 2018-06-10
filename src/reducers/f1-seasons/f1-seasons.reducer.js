import { GET_SEASONS_SUCCESS } from 'actions/f1-seasons';

export const f1SeasonsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SEASONS_SUCCESS:
      return action.data;

    default:
      return state;
  }
};
