import React from 'react';
import PropTypes from 'prop-types';
import './taskContent.scss';
import Badge from '../../atoms/Badge';

function TaskContent({ title, createdAt, lastUpdatedAt, status, taskContent }) {
  return (
    <section className="taskContent">
      <header>
        <div className="taskContent__header">
          <h2>{title}</h2>
          <div className="taskContent__meta">
            <span className="taskContent__meta--subText">
              Create on - {createdAt}
            </span>
            <span className="taskContent__meta--subText">
              Last Updated on - {lastUpdatedAt}
            </span>
            <span className="taskContent__meta--subText">
              Status - {status}
            </span>
          </div>
        </div>
        <div className="taskContent__action">
          <Badge title="Mark As Done" />
        </div>
      </header>
      <article>
        <p>{taskContent}</p>
      </article>
    </section>
  );
}

TaskContent.propTypes = {
  title: PropTypes.string,
  lastUpdatedAt: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
  taskContent: PropTypes.string,
};

TaskContent.defaultProps = {
  title: 'Enter Title Here',
  lastUpdatedAt: '',
  createdAt: '',
  status: '',
  taskContent: 'Enter Description Here',
};

export default TaskContent;
