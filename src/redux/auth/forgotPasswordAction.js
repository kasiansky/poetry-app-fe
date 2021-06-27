import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
} from './actionTypes';
import { request } from '../../api/request';
import { getEndpointName } from '../../api/endPoints';

const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};
const forgotPasswordFailure = error => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const forgotPassword = email => {
  return dispatch => {
    const options = {
      url: getEndpointName('forgotPassword'),
      method: 'post',
      data: { email },
    };
    return request(
      options,
      forgotPasswordSuccess,
      forgotPasswordFailure,
      dispatch
    );
  };
};
