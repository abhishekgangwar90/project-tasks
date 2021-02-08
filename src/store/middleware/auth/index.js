/* eslint-disable import/prefer-default-export */
import { post } from '../../../apis';
import {
  signUpAction,
  signUpSuccessAction,
  signUpFailureAction,
} from '../../actions';

export function signUpActionAsync(url, data) {
  return (dispatch) => {
    dispatch(signUpAction());
    return post(url, data)
      .then((res) => dispatch(signUpSuccessAction(res)))
      .catch((err) => dispatch(signUpFailureAction(err)));
  };
}
