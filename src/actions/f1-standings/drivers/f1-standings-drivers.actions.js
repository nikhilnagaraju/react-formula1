// @flow
import { pathOr } from 'ramda';
import { config } from 'config';

export const GET_STANDINGS_DRIVER_SUCCESS = 'GET_STANDINGS_DRIVER_SUCCESS';
export const GET_STANDINGS_DRIVER_FAILED = 'GET_STANDINGS_DRIVER_FAILED';

/**
 * Extracts seasons from response data.
 */
const extractStandings = (year, data) => ({
  [year]: pathOr([], ['MRData', 'StandingsTable'], data),
});

/**
 * Action dispatched when driver standings for a season has been successfully fetched.
 */
const getStandingsDriverSuccessAction = data => ({
  type: GET_STANDINGS_DRIVER_SUCCESS,
  data,
});

/**
 * Action dispatched when driver standings for a season has failed.
 */
const getStandingsDriverFailedAction = error => ({
  type: GET_STANDINGS_DRIVER_FAILED,
  data: { error },
});

/**
 * Fetches driver standings for the given season from the Ergast API.
 */
export const getDriverStandings = (year: string) => ((dispatch) => {
  if (localStorage.f1DriverStandings) {
    // Fetch data from local storage
    const data = JSON.parse(localStorage.f1DriverStandings)[year];
    dispatch(getStandingsDriverSuccessAction(extractStandings(year, data)));
  } else {
    fetch(`${config.endpoint}/${year}/driverstandings/1.json`)
      .then((response) => {
        if (!response.ok || response.status >= 400) {
          return Promise.reject(Error('Unable to fetch F1 driver standings from the Ergast API'));
        }
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        // Append standings to local storage
        if (!localStorage.f1DriverStandings) localStorage.f1DriverStandings = '{}';
        const json = JSON.parse(localStorage.f1DriverStandings);
        const storage = { ...json, ...{ [year]: data } };
        localStorage.f1DriverStandings = JSON.stringify(storage);
        dispatch(getStandingsDriverSuccessAction(extractStandings(year, data)));
      })
      .catch((error) => {
        dispatch(getStandingsDriverFailedAction(error.message));
        if (!(error instanceof TypeError)) throw error;
      });
  }
});
