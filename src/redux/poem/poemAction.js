import { POST_POEM_SUCCESS, POST_POEM_FAILURE } from './poemActionTypes';
import { request } from '../../api/request';
import { getEndpointName } from '../../api/endPoints';

const postPoemSuccess = data => {
  return {
    type: POST_POEM_SUCCESS,
    payload: data,
  };
};
const postPoemFailure = error => {
  return {
    type: POST_POEM_FAILURE,
    payload: error,
  };
};

export const postPoem = poem => {
  return dispatch => {
    const options = {
      url: getEndpointName('postPoem'),
      method: 'post',
      data: poem,
    };
    return request(options, postPoemSuccess, postPoemFailure, dispatch);
  };
};
