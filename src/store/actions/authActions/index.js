/* eslint-disable import/prefer-default-export */
import {
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../../constants';

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

export const signInAction = (payload) => {
  return {
    type: SIGN_IN,
    payload,
  };
};

export const signInSuccessAction = (payload) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload,
  };
};

export const signInFailureAction = (payload) => {
  return {
    type: SIGN_IN_FAILURE,
    payload,
  };
};
