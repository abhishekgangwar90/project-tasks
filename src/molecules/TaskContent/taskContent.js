import React from 'react';
import PropTypes from 'prop-types';
import './taskContent.scss';

function TaskContent({ title, taskContent }) {
  return (
    <article className="taskContent">
      <h2 className="taskContent__header">
        <span className="taskContent__header--main">{title}</span>
      </h2>
      <p>{taskContent}</p>
    </article>
  );
}

TaskContent.propTypes = {
  title: PropTypes.string,
  taskContent: PropTypes.string,
};

TaskContent.defaultProps = {
  title: 'Enter Title Here',
  taskContent: 'Enter Description Here',
};

export default TaskContent;
