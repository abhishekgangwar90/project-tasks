/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Task from '../../atoms/Task';
import './tasksList.scss';

function TasksList({
  tasks,
  searchTerm,
  selectedTask,
  selectedFilter,
  getAllTasksAsync,
  setSelectedTaskAction,
}) {
  const regex = new RegExp(searchTerm, 'i');

  useEffect(() => {
    getAllTasksAsync();
  }, []);

  const handleTaskClick = (id) => {
    if (tasks && tasks.data)
      setSelectedTaskAction(tasks.data.filter((elm) => elm._id === id)[0]);
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
    .filter((elm) => {
      if (searchTerm) {
        return regex.test(elm.title, 'i');
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
  selectedTask: {},
  searchTerm: '',
};

TasksList.propTypes = {
  tasks: PropTypes.exact({
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(Object),
    error: PropTypes.string,
  }),
  selectedTask: PropTypes.instanceOf(Object),
  selectedFilter: PropTypes.string.isRequired,
  searchTerm: PropTypes.string,
  getAllTasksAsync: PropTypes.func.isRequired,
  setSelectedTaskAction: PropTypes.func.isRequired,
};

export default TasksList;
