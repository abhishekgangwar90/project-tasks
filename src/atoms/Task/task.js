/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import './task.scss';
import { convertTimeStampToDate } from '../../utils/appUtils';

function Task({
  _id,
  title,
  selectedTask,
  updatedAt,
  isComplete,
  onTaskClick,
}) {
  return (
    <div
      className={`task ${selectedTask._id === _id && 'task--selected'}`}
      tabIndex="0"
      onKeyDown={() => {}}
      onClick={() => onTaskClick(_id)}
      role="button"
    >
      <div className="task__content">
        <h2>{title}</h2>
        <div className="task__meta">
          <span className="u-margin-right-small">
            {convertTimeStampToDate(updatedAt)}
          </span>
          {isComplete ? (
            <span className="task__status task__status--completed">
              Completed
            </span>
          ) : (
            <span className="task__status task__status--pending">Pending</span>
          )}
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  updatedAt: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  selectedTask: PropTypes.instanceOf(Object).isRequired,
};

Task.defaultProps = {
  isComplete: false,
};

export default Task;
