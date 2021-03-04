import React from 'react';
import CreateNewLogo from '../../atoms/CreateNewLogo';
import './emptyContent.scss';

function EmptyContent() {
  return (
    <figcaption className="emptyContent">
      <CreateNewLogo />
      <caption>
        <h2>Create New Task</h2>
        <h3>
          Click on <span className="primary__text">+Add New</span> to Create New
          Task
        </h3>
      </caption>
    </figcaption>
  );
}

export default EmptyContent;
