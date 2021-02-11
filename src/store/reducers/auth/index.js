import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
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
        authToken: payload.authToken,
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
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
        isLoggedIn: false,
        authToken: payload.authToken,
      };
    }

    default:
      return state;
  }
}

export default authReducer;
