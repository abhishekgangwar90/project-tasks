import { SET_SELECTED_FILTER } from '../../constants';

/* eslint-disable import/prefer-default-export */
export const initialState = {
  selectedFilter: 'all',
};

function filterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SELECTED_FILTER: {
      return {
        ...state,
        selectedFilter: payload.selectedFilter,
      };
    }

    default: {
      return state;
    }
  }
}

export default filterReducer;
