import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './taskContent.scss';
import Badge from '../../atoms/Badge';
import { convertTimeStampToDate } from '../../utils/appUtils';

function TaskContent({
  id,
  title,
  createdAt,
  lastUpdatedAt,
  status,
  taskContent,
  updateTaskAsync,
}) {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    setValue(taskContent);
  }, []);

  const handleTaskUpdate = () => {
    updateTaskAsync({
      id,
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
              {convertTimeStampToDate(lastUpdatedAt)}
            </span>
            <span className="taskContent__meta--subText">
              <strong>Status</strong> - {status}
            </span>
          </div>
        </div>
        <div className="taskContent__action">
          <Badge title="Save" onClick={handleTaskUpdate} />
          <Badge title="Mark As Done" />
        </div>
      </header>
      <article>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      </article>
    </section>
  );
}

TaskContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  lastUpdatedAt: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
  taskContent: PropTypes.string,
  updateTaskAsync: PropTypes.func.isRequired,
};

TaskContent.defaultProps = {
  id: '',
  title: 'Enter Title Here',
  lastUpdatedAt: '',
  createdAt: '',
  status: '',
  taskContent: 'Enter Description Here',
};

export default TaskContent;
