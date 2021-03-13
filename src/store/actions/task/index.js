/* eslint-disable import/prefer-default-export */
import {
  CREATE_TASK,
  CREATE_TASK_FAILURE,
  CREATE_TASK_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  GET_ALL_TASK,
  GET_ALL_TASK_FAILURE,
  GET_ALL_TASK_SUCCESS,
  UPDATE_TASK,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
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

export const createTask = (payload) => {
  return {
    type: CREATE_TASK,
    payload,
  };
};

export const createTaskSuccess = (payload) => {
  return {
    type: CREATE_TASK_SUCCESS,
    payload,
  };
};

export const createTaskFailure = (payload) => {
  return {
    type: CREATE_TASK_FAILURE,
    payload,
  };
};

export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};

export const updateTaskSuccess = (payload) => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload,
  };
};

export const updateTaskFailure = (payload) => {
  return {
    type: UPDATE_TASK_FAILURE,
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const deleteTaskSuccess = (payload) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload,
  };
};

export const deleteTaskFailure = (payload) => {
  return {
    type: DELETE_TASK_FAILURE,
    payload,
  };
};
