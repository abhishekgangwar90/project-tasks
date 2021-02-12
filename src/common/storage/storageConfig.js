import Cookies from 'js-cookies';

export const setDataInStorage = (key, value) => {
  Cookies.setItem(key, JSON.stringify(value), {
    secure: true,
    httpOnly: false,
  });
};

export const getFromStorage = (key) => {
  return Cookies.getItem(key);
};

export const deleteStorage = (key) => {
  return Cookies.removeItem(key);
};
