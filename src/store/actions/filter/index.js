/* eslint-disable import/prefer-default-export */
import { SET_SELECTED_FILTER } from '../../constants';

export const setSelectedFilterAction = (payload) => {
  return {
    type: SET_SELECTED_FILTER,
    payload,
  };
};
