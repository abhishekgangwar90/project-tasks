/* eslint-disable import/prefer-default-export */
export const initialState = {
  error: '',
  name: '',
  email: '',
  password: '',
};

export const createAccountConstants = {
  CHANGE_FIELD_ACTION: 'CHANGE_FIELD_ACTION',
  SHOW_SIGNUP_ERROR: 'SHOW_SIGNUP_ERROR',
};

export function useCreateAccountReducer(state, { type, payload }) {
  switch (type) {
    case createAccountConstants.CHANGE_FIELD_ACTION: {
      const { field, value } = payload;
      return {
        ...state,
        [field]: value,
        error: null,
      };
    }

    case createAccountConstants.SHOW_SIGNUP_ERROR: {
      return {
        ...state,
        error: payload.error,
      };
    }

    default:
      return state;
  }
}
