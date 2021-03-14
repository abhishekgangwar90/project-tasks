import { connect } from 'react-redux';
import TasksList from './tasksList';
import { getAllTasksAsync } from '../../store/middleware/task';
import { setSelectedTaskAction } from '../../store/actions';

const mapStateToProps = ({ task, custom }) => {
  const { selectedFilter, selectedTask, searchTerm } = custom;
  return {
    selectedFilter,
    selectedTask,
    searchTerm,
    tasks: task,
  };
};
const dispatchActions = {
  getAllTasksAsync,
  setSelectedTaskAction,
};

export default connect(mapStateToProps, dispatchActions)(TasksList);
