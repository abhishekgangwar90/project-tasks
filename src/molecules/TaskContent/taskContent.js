import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './taskContent.scss';
import Badge from '../../atoms/Badge';
import { convertTimeStampToDate } from '../../utils/appUtils';

function TaskContent({
  _id,
  title,
  createdAt,
  updatedAt,
  isComplete,
  description,
  updateTaskAsync,
}) {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    setValue(description);
  }, [_id]);

  const handleTaskUpdate = () => {
    updateTaskAsync({
      id: _id,
      title,
      description: value,
    });
  };

  return (
    <section className="taskContent">
      <header>
        <div className="taskContent__header">
          <h2>{title}</h2>
          <div className="taskContent__meta">
            <span className="taskContent__meta--subText">
              <strong>Create on</strong> - {convertTimeStampToDate(createdAt)}
            </span>
            <span className="taskContent__meta--subText">
              <strong>Last Updated on</strong> -{' '}
              {convertTimeStampToDate(updatedAt)}
            </span>
            <span className="taskContent__meta--subText">
              <strong>Status</strong> - {isComplete ? 'Complete' : 'Pending'}
            </span>
          </div>
        </div>
        <div className="taskContent__action">
          <Badge title="Save" onClick={handleTaskUpdate} />
          <Badge title="Mark As Done" />
        </div>
      </header>
      <article>
        <textarea
          resize="none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </article>
    </section>
  );
}

TaskContent.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
  isComplete: PropTypes.bool,
  description: PropTypes.string,
  updateTaskAsync: PropTypes.func.isRequired,
};

TaskContent.defaultProps = {
  _id: '',
  title: 'Enter Title Here',
  updatedAt: '',
  createdAt: '',
  isComplete: false,
  description: 'Enter Description Here',
};

export default TaskContent;
