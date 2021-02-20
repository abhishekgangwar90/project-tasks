import { connect } from 'react-redux';
import TasksList from './tasksList';
import { getAllTasksAsync } from '../../store/middleware/task';

const mapStateToProps = (state) => {
  return {
    tasks: state.task,
  };
};
const dispatchActions = {
  getAllTasksAsync,
};

export default connect(mapStateToProps, dispatchActions)(TasksList);
