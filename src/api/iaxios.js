import axios from 'axios'

axios.defaults.headers = {
  'api-version': 'V1',
}

axios.defaults.baseURL = '/api/f'

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const setHeaders = function (headers) {
  for (let key in headers) {
    axios.defaults.headers[key] = headers[key]
  }
}

export default axios
