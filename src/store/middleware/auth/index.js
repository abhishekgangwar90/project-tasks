/* eslint-disable prettier/prettier */
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
  signOutAction,
  signOutSuccessAction,
  signOutFailureAction,
} from '../../actions';
import { apiEndPoints } from '../../../constants/apiEndPoints';
import { parseError } from '../ErrorHandler';
import { setDataInStorage, deleteFromStorage } from '../../../common/storage';

export function signUpActionAsync(data) {
  return (dispatch) => {
    dispatch(signUpAction());
    return post(apiEndPoints.signUp, data)
      .then((res) => res.data)
      .then((res) => {
        setDataInStorage({
          isLoggedIn: true,
          authToken: res.authToken,
        });
        dispatch(signUpSuccessAction(res));
      })
      .catch((err) => dispatch(signUpFailureAction(parseError(err))));
  };
}

export function signInActionAsync(data) {
  return (dispatch) => {
    dispatch(signInAction());
    return post(apiEndPoints.signIn, data)
      .then((res) => res.data)
      .then((res) => {
        setDataInStorage({
          isLoggedIn: true,
          authToken: res.authToken,
        });
        dispatch(signInSuccessAction(res));
      })
      .catch((err) => dispatch(signInFailureAction(parseError(err))));
  };
}


export function singOutActionAsync(){
  return (dispatch) => {
    dispatch(signOutAction());

    return post(apiEndPoints.signOut)
    .then((res) => res.data)
    .then((res) =>{
      deleteFromStorage({
        isLoggedIn: false,
        authToke: null
      })
      dispatch(signOutSuccessAction(res))
    })
    .catch((err) => dispatch(signOutFailureAction(parseError(err))))
  }
}