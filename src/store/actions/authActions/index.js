/* eslint-disable import/prefer-default-export */
import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../../constants';

export const signUpAction = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

export const signUpSuccessAction = (payload) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload,
  };
};

export const signUpFailureAction = (payload) => {
  return {
    type: SIGN_UP_FAILURE,
    payload,
  };
};
