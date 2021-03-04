import React from 'react';
import CreateNewLogo from '../../atoms/CreateNewLogo';
import './emptyContent.scss';

function EmptyContent() {
  return (
    <figcaption className="emptyContent">
      <CreateNewLogo />
      <caption> Create New Task</caption>
    </figcaption>
  );
}

export default EmptyContent;
