import { connect } from 'react-redux';
import TasksList from './tasksList';
import { getAllTasksAsync } from '../../store/middleware/task';

const mapStateToProps = (state) => {
  return state;
};
const dispatchActions = {
  getAllTasksAsync,
};

export default connect(mapStateToProps, dispatchActions)(TasksList);
