import * as types from '../store/actionTypes';

export const alterQuery = ({ field, value }) => dispatch => {
  dispatch({
    type: types.ALTER_QUERY,
    field,
    value, 
  });
}
