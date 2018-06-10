// @flow
import { config } from 'config';

export const GET_STANDINGS_DRIVER_SUCCESS = 'GET_STANDINGS_DRIVER_SUCCESS';

export const getDriverStandings = (year: string) => ((dispatch) => {
  fetch(`${config.endpoint}/${year}/driverstandings.json`)
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: GET_STANDINGS_DRIVER_SUCCESS,
        data: response,
      });
    });
});
