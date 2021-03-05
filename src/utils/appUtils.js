/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import moment from 'moment';

export const checkIfUserLoggedIn = (state) => {
  return state && state.auth && state.auth.isLoggedIn;
};

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const convertTimeStampToDate = (timestamp) => {
  const date = moment(timestamp);
  const today = moment(new Date());
  if (date.isSame(today, 'days')) {
    return date.format('hh:mm A');
  }
  if (date.isSame(today.subtract(1, 'days'), 'days')) {
    return 'Yesterday';
  }
  return date.format('DD-MM-YYYY');
};
