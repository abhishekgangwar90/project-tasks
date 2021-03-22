import {
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../../constants';

const initialState = {
  isLoading: false,
  authToken: null,
  isLoggedIn: false,
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_UP: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authToken: payload.authToken,
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    case SIGN_IN: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        authToken: payload.authToken,
      };
    }

    case SIGN_IN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    case SIGN_OUT: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    }

    case SIGN_OUT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
}

export default authReducer;
