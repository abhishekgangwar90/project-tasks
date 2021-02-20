/* eslint-disable no-debugger */
import axios from 'axios';
import store from '../store';

const axiosInstance = axios.create({
  baseURL: 'https://project-task-manager-123.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (request && request.headers && request.headers.requireAuth) {
      delete request.headers.requireAuth;
      console.log(store.getState());
      // request.headers['Authorization']  =
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
