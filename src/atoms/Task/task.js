import React from 'react';
import PropTypes from 'prop-types';
import './task.scss';

function Task({ title, isComplete, selected }) {
  return (
    <div className={`task ${selected && 'task--selected'}`}>
      <div className="task__content">
        <h2>{title}</h2>
        <div className="task__meta">
          <span className="u-margin-right-small">27-Dec</span>
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
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  selected: PropTypes.bool,
};

Task.defaultProps = {
  selected: false,
  isComplete: false,
};

export default Task;
