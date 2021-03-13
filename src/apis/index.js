/* eslint-disable import/prefer-default-export */
import axios from './axios';

export const get = (url, config) => {
  return axios.get(url, config);
};

export const post = (url, data, config) => {
  return axios.post(url, data, config);
};

export const patch = (url, data, config) => {
  return axios.patch(url, data, config);
};
