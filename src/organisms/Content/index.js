import { connect } from 'react-redux';
import Content from './Content';

const mapStateToProps = ({ task, custom }) => {
  const { selectedTask } = custom;
  return {
    tasks: task.data || [],
    selectedTask,
  };
};

const dispatchActions = {};

export default connect(mapStateToProps, dispatchActions)(Content);
