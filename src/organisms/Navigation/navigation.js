import React from 'react';

import Button from '../../atoms/Button';
import Filters from '../../molecules/Filters';
import TasksList from '../../molecules/TasksList';
import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <Button
        title="+ Add New Task"
        size="medium"
        color="green-dark"
        animated
        classes="u-margin-top-xl u-margin-bottom-large"
      />
      <div className="navigation__filters u-margin-top-xl">
        <Filters />
      </div>
      <div className="navigation__taskView">
        <TasksList />
      </div>
    </div>
  );
}

export default Navigation;
