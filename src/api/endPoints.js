export const endpoints = {
  registration: 'register',
  login: 'login',
  forgotPassword: 'api/auth/forgotPassword',
  recoverPassword: 'api/auth/recoverPassword',
  postPoem: 'api/poems',
};
const baseUrl = 'http://localhost:4000/';
export const getEndpointName = endpoint => {
  return `${baseUrl}${endpoints[endpoint]}`;
};
