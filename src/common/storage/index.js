/* eslint-disable no-debugger */
import Cookies from 'js-cookies';
import { DEFAULT_KEY } from './storageConfig';

export const setDataInStorage = (value, key = DEFAULT_KEY) => {
  Cookies.setItem(key, JSON.stringify(value), {
    secure: true,
    httpOnly: false,
  });
};

export const getFromStorage = (key = DEFAULT_KEY) => {
  return Cookies.getItem(key);
};

export const deleteFromStorage = (key = DEFAULT_KEY) => {
  return Cookies.removeItem(key);
};

export const getAuthDataFromStorage = () => {
  const authData = JSON.parse(getFromStorage());
  return (
    authData &&
    authData.isLoggedIn &&
    authData.authToken && {
      isLoggedIn: authData.isLoggedIn,
      authToken: authData.authToken,
    }
  );
};
