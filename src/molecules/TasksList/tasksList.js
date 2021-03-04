import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Task from '../../atoms/Task';
import './tasksList.scss';

function TasksList({ tasks, selectedFilter, getAllTasksAsync }) {
  useEffect(() => {
    getAllTasksAsync();
  }, []);

  if (tasks.isLoading) {
    return '...Loading';
  }

  if (tasks.data.length === 0) {
    return <div className="noTask">No Tasks To Display</div>;
  }

  return tasks.data
    .filter((elm) => {
      if (selectedFilter === 'Completed') {
        return elm.isComplete === true;
      }
      if (selectedFilter === 'Pending') {
        return elm.isComplete === false;
      }
      return true;
    })
    .map((elm) => {
      // eslint-disable-next-line no-underscore-dangle
      return <Task key={elm._id} {...elm} />;
    });
}

TasksList.defaultProps = {
  tasks: {
    isLoading: false,
    data: [],
    error: '',
  },
};

TasksList.propTypes = {
  tasks: PropTypes.exact({
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(Object),
    error: PropTypes.string,
  }),
  selectedFilter: PropTypes.string.isRequired,
  getAllTasksAsync: PropTypes.func.isRequired,
};

export default TasksList;
