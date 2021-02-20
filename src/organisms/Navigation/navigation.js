import React from 'react';

import Button from '../../atoms/Button';
import Task from '../../atoms/Task/task';
import Filters from '../../molecules/Filters';
import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <Button
          title="+ Add New Task"
          size="medium"
          color="green-dark"
          animated
          classes="u-margin-bottom-large"
        />
        <div className="navigation__filter u-margin-top-large u-margin-bottom-small">
          <Filters />
        </div>
        <div className="navigation__taskView">
          <Task selected />
          <Task />
        </div>
      </div>
      <div className="navigation__footer">
        &#64; 2020 By Abhishek, All rights reserved.
      </div>
    </div>
  );
}

export default Navigation;
