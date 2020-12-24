import * as types from '../store/actionTypes';
import initialState from './initialState';

export function query(state = initialState.query, action) {
  switch (action.type) {
    case types.ALTER_QUERY:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}
