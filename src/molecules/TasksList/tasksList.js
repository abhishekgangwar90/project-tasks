import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function TasksList({ getAllTasksAsync }) {
  useEffect(() => {
    getAllTasksAsync();
  }, []);

  return <div>Tasks</div>;
}

TasksList.defaultProps = {};

TasksList.propTypes = {
  getAllTasksAsync: PropTypes.func.isRequired,
};

export default TasksList;
