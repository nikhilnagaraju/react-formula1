// @flow
import { pathOr } from 'ramda';
import { config } from 'config';
import { store } from 'store';
import { getDriverStandings } from 'actions/f1-standings/drivers';

export const GET_SEASONS_SUCCESS = 'GET_SEASONS_SUCCESS';
export const GET_SEASONS_FAILED = 'GET_SEASONS_FAILED';

/**
 * Extracts seasons from response data.
 */
const extractSeasons = data => pathOr([], ['MRData', 'SeasonTable', 'Seasons'], data);

/**
 * Action dispatched when season data is successfully fetched.
 */
const getSeasonsSuccessAction = (seasons) => {
  seasons.map(({ season }) => store.dispatch(getDriverStandings(season)));
  return { type: GET_SEASONS_SUCCESS, seasons };
};

/**
 * Action dispatched when season data fetch from Ergast API fails.
 */
const getSeasonsFailedAction = error => ({ type: GET_SEASONS_FAILED, data: { error } });

/**
 * Action to fetch seasons from the Ergast API.
 * Data is cached to local storage to avoid rate limiting and improve performance.
 */
export const getSeasonsAction = () => ((dispatch) => {
  if (localStorage.f1Seasons) {
    // Fetch data from local storage
    const data = JSON.parse(localStorage.f1Seasons);
    dispatch(getSeasonsSuccessAction(extractSeasons(data)));
  } else {
    // Fetch data from Ergast API
    fetch(`${config.endpoint}/seasons.json?limit=100`)
      .then((response) => {
        if (!response.ok || response.status >= 400) {
          return Promise.reject(Error('Unable to fetch F1 seasons from the Ergast API'));
        }
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        // Save to local storage and send the success message
        localStorage.f1Seasons = JSON.stringify(data);
        dispatch(getSeasonsSuccessAction(extractSeasons(data)));
      })
      .catch((error) => {
        dispatch(getSeasonsFailedAction(error.message));
        if (!(error instanceof TypeError)) throw error;
      });
  }
});
