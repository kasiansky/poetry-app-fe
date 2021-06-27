import {
  RECOVER_PASSWORD_SUCCESS,
  RECOVER_PASSWORD_FAILURE,
} from './actionTypes';
import { request } from '../../api/request';
import { getEndpointName } from '../../api/endPoints';

const recoverPasswordSuccess = data => {
  return {
    type: RECOVER_PASSWORD_SUCCESS,
    payload: data,
  };
};
const recoverPasswordFailure = error => {
  return {
    type: RECOVER_PASSWORD_FAILURE,
    payload: error,
  };
};

export const recoverPassword = data => {
  return dispatch => {
    const options = {
      url: getEndpointName('recoverPassword'),
      method: 'post',
      data,
    };
    return request(
      options,
      recoverPasswordSuccess,
      recoverPasswordFailure,
      dispatch
    );
  };
};
