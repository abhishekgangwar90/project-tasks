/* eslint-disable import/prefer-default-export */

import {
  GET_ALL_TASK,
  GET_ALL_TASK_FAILURE,
  GET_ALL_TASK_SUCCESS,
} from '../../constants';

export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_TASK: {
      return {
        ...state,
      };
    }

    case GET_ALL_TASK_SUCCESS: {
      return {
        ...state,
        payload,
      };
    }

    case GET_ALL_TASK_FAILURE: {
      return {
        ...state,
        payload,
      };
    }

    default:
      return state;
  }
};
