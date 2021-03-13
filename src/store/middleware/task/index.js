/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import { get, patch } from '../../../apis';
import { apiEndPoints } from '../../../constants/apiEndPoints';
import {
  getAllTasks,
  getAllTasksFailure,
  getAllTasksSuccess,
  updateTask,
  updateTaskFailure,
  updateTaskSuccess,
} from '../../actions';
import { parseError } from '../ErrorHandler';

export const getAllTasksAsync = () => (dispatch) => {
  dispatch(getAllTasks());
  return get(apiEndPoints.getAllTasks, {
    headers: {
      requireAuth: true,
    },
  })
    .then((res) => res.data)
    .then((res) => dispatch(getAllTasksSuccess(res)))
    .catch((err) => dispatch(getAllTasksFailure(parseError(err))));
};

/**
 * Updates a task
 * @param {*} id
 */
export const updateTaskAsync = (data) => (dispatch) => {
  dispatch(updateTask(data));
  return patch(
    `${apiEndPoints.updateTask}/${data.id}`,
    {
      title: data.title,
      description: data.description,
    },
    {
      headers: {
        requireAuth: true,
      },
    }
  )
    .then((res) => res.data)
    .then((res) => dispatch(updateTaskSuccess(res)))
    .catch((err) => dispatch(updateTaskFailure(parseError(err))));
};
