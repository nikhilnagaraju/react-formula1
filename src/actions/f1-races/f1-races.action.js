// @flow
import { pathOr } from 'ramda';
import { config } from 'config';

export const GET_RACES_SUCCESS = 'GET_RACES_SUCCESS';
export const GET_RACES_FAILED = 'GET_RACES_FAILED';

/**
 * Extracts seasons from response data.
 */
const extractRaces = data => pathOr([], ['MRData', 'RaceTable', 'Races'], data);

/**
 * Action dispatched when race data is successfully fetched.
 */
const getRacesSuccessAction = races => ({ type: GET_RACES_SUCCESS, races });

/**
 * Action dispatched when race data fetch from Ergast API fails.
 */
const getRacesFailedAction = error => ({ type: GET_RACES_FAILED, data: { error } });

/**
 * Action to fetch race data from the Ergast API.
 */
export const getRacesAction = (year: string) => ((dispatch) => {
  if (!localStorage.f1Races) localStorage.f1Races = '{}';

  const storage = JSON.parse(localStorage.f1Races);
  if (localStorage.f1Races && storage[year]) {
    // Fetch race data from local storage
    dispatch(getRacesSuccessAction(extractRaces(storage[year])));
  } else {
    // Fetch race data from Ergast API
    fetch(`${config.endpoint}/${year}/results.json?limit=1000`)
      .then((response) => {
        if (!response.ok || response.status >= 400) {
          return Promise.reject(Error('Unable to fetch F1 race data from the Ergast API'));
        }
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        // Save to local storage and send the success message
        const json = JSON.parse(localStorage.f1Races);
        localStorage.f1Races = JSON.stringify({ ...json, ...{ [year]: data } });
        dispatch(getRacesSuccessAction(extractRaces(data)));
      })
      .catch((error) => {
        dispatch(getRacesFailedAction(error.message));
        if (!(error instanceof TypeError)) throw error;
      });
  }
});
