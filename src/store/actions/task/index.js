/* eslint-disable import/prefer-default-export */
import {
  GET_ALL_TASK,
  GET_ALL_TASK_FAILURE,
  GET_ALL_TASK_SUCCESS,
} from '../../constants';

export const getAllTasks = (payload) => {
  return {
    type: GET_ALL_TASK,
    payload,
  };
};

export const getAllTasksSuccess = (payload) => {
  return {
    type: GET_ALL_TASK_SUCCESS,
    payload,
  };
};

export const getAllTasksFailure = (payload) => {
  return {
    type: GET_ALL_TASK_FAILURE,
    payload,
  };
};
