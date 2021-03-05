/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Task from '../../atoms/Task';
import './tasksList.scss';

function TasksList({
  tasks,
  selectedTask,
  selectedFilter,
  getAllTasksAsync,
  setSelectedTaskAction,
}) {
  useEffect(() => {
    getAllTasksAsync();
  }, []);

  const handleTaskClick = (id) => {
    setSelectedTaskAction({
      id,
    });
  };

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
    .reverse()
    .map((elm) => {
      return (
        <Task
          {...elm}
          key={elm._id}
          selectedTask={selectedTask}
          onTaskClick={handleTaskClick}
        />
      );
    });
}

TasksList.defaultProps = {
  tasks: {
    isLoading: false,
    data: [],
    error: '',
  },
  selectedTask: '',
};

TasksList.propTypes = {
  tasks: PropTypes.exact({
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(Object),
    error: PropTypes.string,
  }),
  selectedTask: PropTypes.string,
  selectedFilter: PropTypes.string.isRequired,
  getAllTasksAsync: PropTypes.func.isRequired,
  setSelectedTaskAction: PropTypes.func.isRequired,
};

export default TasksList;
