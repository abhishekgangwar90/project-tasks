import React from 'react';
import CreateNewLogo from '../../atoms/CreateNewLogo';
import './emptyContent.scss';

function EmptyContent() {
  return (
    <figure className="emptyContent">
      <CreateNewLogo />
      <figcaption>
        <h2>Create New Task</h2>
        <h3>
          Click on <span className="primary__text">+Add New Task</span> to
          Create New Task.
        </h3>
      </figcaption>
    </figure>
  );
}

export default EmptyContent;
