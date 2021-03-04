import { connect } from 'react-redux';
import TasksList from './tasksList';
import { getAllTasksAsync } from '../../store/middleware/task';

const mapStateToProps = ({ task, filter }) => {
  const { selectedFilter } = filter;
  return {
    selectedFilter,
    tasks: task,
  };
};
const dispatchActions = {
  getAllTasksAsync,
};

export default connect(mapStateToProps, dispatchActions)(TasksList);
