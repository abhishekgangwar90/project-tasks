import React from 'react';

import Button from '../../atoms/Button';
import Filters from '../../molecules/Filters';
import TasksList from '../../molecules/TasksList';
import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__button">
        <Button
          title="+ Add New Task"
          size="medium"
          color="green-dark"
          animated
        />
      </div>
      <div className="navigation__filter">
        <Filters />
      </div>
      <div className="navigation__taskView">
        <TasksList />
      </div>
      <div className="navigation__footer">
        &#64; 2020 By Abhishek, All rights reserved.
      </div>
    </div>
  );
}

export default Navigation;
