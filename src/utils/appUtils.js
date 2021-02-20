/* eslint-disable import/prefer-default-export */
export const checkIfUserLoggedIn = (state) => {
  return state && state.auth && state.auth.isLoggedIn;
};

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
