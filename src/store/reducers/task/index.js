import {
  GET_ALL_TASK,
  GET_ALL_TASK_FAILURE,
  GET_ALL_TASK_SUCCESS,
} from '../../constants';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TASK: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_ALL_TASK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }

    case GET_ALL_TASK_FAILURE: {
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
