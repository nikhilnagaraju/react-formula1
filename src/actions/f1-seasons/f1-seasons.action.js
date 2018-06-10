import { pathOr } from 'ramda';

export const GET_SEASONS_SUCCESS = 'GET_SEASONS_SUCCESS';

export const getSeasonsAction = () => ((dispatch) => {
  fetch('https://ergast.com/api/f1/seasons.json?limit=100')
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: GET_SEASONS_SUCCESS,
        data: pathOr([], ['MRData', 'SeasonTable', 'Seasons'], response),
      });
    });
});
