import { connect } from 'react-redux';
import TasksList from './tasksList';
import { getAllTasksAsync } from '../../store/middleware/task';
import { setSelectedTaskAction } from '../../store/actions';

const mapStateToProps = ({ task, custom }) => {
  const { selectedFilter, selectedTask } = custom;
  return {
    selectedFilter,
    selectedTask,
    tasks: task,
  };
};
const dispatchActions = {
  getAllTasksAsync,
  setSelectedTaskAction,
};

export default connect(mapStateToProps, dispatchActions)(TasksList);
