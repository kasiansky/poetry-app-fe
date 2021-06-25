export const endpoints = {
  registration: 'register',
};
const baseUrl = 'http://localhost:4000/';
export const getEndpointName = endpoint => {
  return `${baseUrl}${endpoints[endpoint]}`;
};
