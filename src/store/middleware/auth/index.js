/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import { post } from '../../../apis';
import {
  signUpAction,
  signUpSuccessAction,
  signUpFailureAction,
  signInAction,
  signInSuccessAction,
  signInFailureAction,
} from '../../actions';
import { apiEndPoints } from '../../../constants/apiEndPoints';
import { parseError } from '../ErrorHandler';

export function signUpActionAsync(data) {
  return (dispatch) => {
    dispatch(signUpAction());
    return post(apiEndPoints.signUp, data)
      .then((res) => res.data)
      .then((res) => dispatch(signUpSuccessAction(res)))
      .catch((err) => dispatch(signUpFailureAction(parseError(err))));
  };
}

export function signInActionAsync(data) {
  return (dispatch) => {
    dispatch(signInAction());
    return post(apiEndPoints.signIn, data)
      .then((res) => res.data)
      .then((res) => dispatch(signInSuccessAction(res)))
      .catch((err) => dispatch(signInFailureAction(parseError(err))));
  };
}
