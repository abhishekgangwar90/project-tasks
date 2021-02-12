export const initialState = {
  email: '',
  password: '',
};

export const signInConstants = {
  CHANGE_FIELD_ACTION: 'CHANGE_FIELD_ACTION',
  HANDLE_SIGN_IN_ERROR: 'HANDLE_SIGN_IN_ERROR',
};

export function signInReducer(state, { type, payload }) {
  switch (type) {
    case signInConstants.CHANGE_FIELD_ACTION: {
      const { field, value } = payload;
      return {
        ...state,
        [field]: value,
      };
    }

    default: {
      return state;
    }
  }
}
