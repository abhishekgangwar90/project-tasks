import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../../constants';

const initialState = {
  authToken: null,
  isLoggedIn: false,
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_UP: {
      return payload;
    }

    case SIGN_UP_SUCCESS: {
      return state;
    }

    case SIGN_UP_FAILURE: {
      return state;
    }

    default:
      return state;
  }
}

export default authReducer;
