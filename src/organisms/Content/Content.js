/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContent from '../../molecules/TaskContent';
import EmptyContent from '../../molecules/EmptyContent';
import './content.scss';

function Content({ selectedTask, tasks }) {
  const [selectedTaskInfo, setSelectedTaskInfo] = React.useState({});

  useEffect(() => {
    const activeTask = tasks.filter((elm) => elm._id === selectedTask);
    setSelectedTaskInfo(activeTask[0]);
  }, [selectedTask]);

  return (
    <section className="content">
      {selectedTaskInfo && selectedTaskInfo.title ? (
        <TaskContent
          title={selectedTaskInfo.title}
          createdAt={selectedTaskInfo.createdAt}
          lastUpdatedAt={selectedTaskInfo.updatedAt}
          status={selectedTaskInfo.isComplete ? 'Completed' : 'Pending'}
          taskContent={selectedTaskInfo.description}
        />
      ) : (
        <EmptyContent />
      )}
    </section>
  );
}

Content.propTypes = {
  selectedTask: PropTypes.string,
  tasks: PropTypes.arrayOf(Object),
};

Content.defaultProps = {
  selectedTask: '',
  tasks: [],
};
export default Content;
