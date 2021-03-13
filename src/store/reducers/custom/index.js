import {
  SET_SEARCHED_TITLE,
  SET_SELECTED_FILTER,
  SET_SELECTED_TASK,
} from '../../constants';

/* eslint-disable import/prefer-default-export */
export const initialState = {
  selectedFilter: 'All',
};

function CustomReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SELECTED_FILTER: {
      return {
        ...state,
        selectedFilter: payload.selectedFilter,
      };
    }

    case SET_SELECTED_TASK: {
      return {
        ...state,
        selectedTask: payload,
      };
    }

    case SET_SEARCHED_TITLE: {
      return {
        ...state,
        searchTerm: payload.searchTerm,
      };
    }

    default: {
      return state;
    }
  }
}

export default CustomReducer;
