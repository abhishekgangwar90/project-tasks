/* eslint-disable no-underscore-dangle */
import {
  CREATE_TASK,
  CREATE_TASK_FAILURE,
  CREATE_TASK_SUCCESS,
  GET_ALL_TASK,
  GET_ALL_TASK_FAILURE,
  GET_ALL_TASK_SUCCESS,
  UPDATE_TASK,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
} from '../../constants';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TASK: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }

    case GET_ALL_TASK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: '',
      };
    }

    case GET_ALL_TASK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    case CREATE_TASK: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CREATE_TASK_SUCCESS: {
      let modifiedData = [];
      if (payload && payload._id) {
        modifiedData = state.data.push(payload);
      }
      return {
        ...state,
        isLoading: false,
        data: modifiedData,
      };
    }

    case CREATE_TASK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    case UPDATE_TASK: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UPDATE_TASK_SUCCESS: {
      const modifiedData = [];
      if (payload && payload._id) {
        modifiedData.push(payload);
      }
      return {
        ...state,
        isLoading: false,
        data: modifiedData,
      };
    }

    case UPDATE_TASK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
};

export default taskReducer;
