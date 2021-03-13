/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import TaskContent from '../../molecules/TaskContent';
import EmptyContent from '../../molecules/EmptyContent';
import './content.scss';

function Content({ selectedTask, updateTaskAsync }) {
  return (
    <section className="content">
      {selectedTask && selectedTask._id ? (
        <TaskContent {...selectedTask} updateTaskAsync={updateTaskAsync} />
      ) : (
        <EmptyContent />
      )}
    </section>
  );
}

Content.propTypes = {
  selectedTask: PropTypes.instanceOf(Object),
  updateTaskAsync: PropTypes.func,
};

Content.defaultProps = {
  selectedTask: {},
  updateTaskAsync: () => {},
};
export default Content;
