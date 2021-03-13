/* eslint-disable import/prefer-default-export */
import {
  SET_SEARCHED_TITLE,
  SET_SELECTED_FILTER,
  SET_SELECTED_TASK,
} from '../../constants';

export const setSelectedFilterAction = (payload) => {
  return {
    type: SET_SELECTED_FILTER,
    payload,
  };
};

export const setSelectedTaskAction = (payload) => {
  return {
    type: SET_SELECTED_TASK,
    payload,
  };
};

export const setSearchedTitleAction = (payload) => {
  return {
    type: SET_SEARCHED_TITLE,
    payload,
  };
};
