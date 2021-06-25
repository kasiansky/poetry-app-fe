import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';
import { request } from '../../api/request';
import { getEndpointName } from '../../api/endPoints';

const signupSuccess = user => {
  return {
    tyep: SIGNUP_SUCCESS,
    payload: user,
  };
};
const signUpFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
export const signup = user => {
  return dispatch => {
    const options = {
      url: getEndpointName('registration'),
      method: 'post',
      data: user,
    };
    return request(options, signupSuccess, signUpFailure, dispatch);
  };
};
