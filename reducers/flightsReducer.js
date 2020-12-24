import * as types from '../store/actionTypes';
import initialState from './initialState';

export function flights(state = initialState.flights, action) {
  switch (action.type) {
    case types.SUCCESS_FLIGHTS:
      return action.flights;
    default:
      return state;
  }
}

export function requestInProgress(state = initialState.requestInProgress, action) {
  switch (action.type) {
    case types.REQUEST_FLIGHTS:
      return true;
    case types.SUCCESS_FLIGHTS:
    case types.FAIL_FLIGHTS:
      return false;
    default:
      return state;
  }
}