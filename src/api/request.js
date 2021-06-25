import axios from 'axios';

export const request = (options, onSuccess, onFailure, dispatch) => {
  return axios(options)
    .then(response => {
      dispatch(onSuccess(response.data));
    })
    .catch(error => {
      dispatch(onFailure(error));
    });
};
