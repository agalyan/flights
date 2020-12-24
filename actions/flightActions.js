import config from '../configs/configs';
import * as types from '../store/actionTypes';
import { makeRequestQuery } from './helpers/transform';

export const searchFlights = () => (dispatch, getState) => {
  dispatch({
    type: types.REQUEST_FLIGHTS,
  });
  fetch(`${config.API_URL}${makeRequestQuery(getState().query)}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: types.SUCCESS_FLIGHTS,
        flights: data.data,
      });

    })
    .catch(error => {
      dispatch({
        type: types.FAIL_FLIGHTS,
        error,
      });
    });
}
