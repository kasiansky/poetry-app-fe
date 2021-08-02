import axios from 'axios';

export const request = (options, onSuccess, onFailure, dispatch) => {
  const user = localStorage.getItem('currentUser')
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };
  options[headers] = headers;
  return axios(options)
    .then(response => {
      dispatch(onSuccess(response.data));
    })
    .catch(error => {
      dispatch(onFailure(error));
    });
};
