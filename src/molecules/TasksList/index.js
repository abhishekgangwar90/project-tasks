import { connect } from 'react-redux';
import TasksList from './tasksList';
import { getAllTasksAsync } from '../../store/middleware/task';

const mapStateToProps = ({ task, custom }) => {
  const { selectedFilter } = custom;
  return {
    selectedFilter,
    tasks: task,
  };
};
const dispatchActions = {
  getAllTasksAsync,
};

export default connect(mapStateToProps, dispatchActions)(TasksList);
