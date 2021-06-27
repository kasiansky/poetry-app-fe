import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
} from './actionTypes';
import { request } from '../../api/request';
import { getEndpointName } from '../../api/endPoints';

const signupSuccess = user => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};
const signUpFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
export const logout = () => {
  return {
    type: LOG_OUT,
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
export const login = user => {
  return dispatch => {
    const options = {
      url: getEndpointName('login'),
      method: 'post',
      data: user,
    };
    return request(options, loginSuccess, loginFailure, dispatch);
  };
};
