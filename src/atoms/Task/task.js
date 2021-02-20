import React from 'react';
import PropTypes from 'prop-types';
import './task.scss';

function Task({ selected }) {
  return (
    <div className={`task ${selected && 'task--selected'}`}>
      <div className="task__content">
        <h2>Task Title</h2>
        <div className="task__meta">
          <span className="u-margin-right-small">27-Dec</span>
          <span>-Pending</span>
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  selected: PropTypes.bool,
};

Task.defaultProps = {
  selected: false,
};

export default Task;
