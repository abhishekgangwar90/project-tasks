/* eslint-disable import/prefer-default-export */
import { get } from '../../../apis';
import { apiEndPoints } from '../../../constants/apiEndPoints';
import { getAllTasks, getAllTasksSuccess } from '../../actions';

export const getAllTasksAsync = () => (dispatch) => {
  dispatch(getAllTasks());
  return get(apiEndPoints.getAllTasks, {
    headers: {
      requireAuth: true,
    },
  })
    .then((res) => res.data)
    .then((res) => dispatch(getAllTasksSuccess(res)))
    .catch((err) => console.log(err));
};
