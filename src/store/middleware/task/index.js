/* eslint-disable import/prefer-default-export */
import { get } from '../../../apis';
import { apiEndPoints } from '../../../constants/apiEndPoints';
import { getAllTasks } from '../../actions';

export const getAllTasksAsync = () => (dispatch) => {
  dispatch(getAllTasks);

  return get(apiEndPoints.getAllTasks, {
    headers: {
      requireAuth: true,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
