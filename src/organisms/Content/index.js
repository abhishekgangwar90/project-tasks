import { connect } from 'react-redux';
import Content from './Content';
import { updateTaskAsync } from '../../store/middleware';

const mapStateToProps = ({ task, custom }) => {
  const { selectedTask } = custom;
  return {
    tasks: task.data || [],
    selectedTask,
  };
};

const dispatchActions = {
  updateTaskAsync,
};

export default connect(mapStateToProps, dispatchActions)(Content);
