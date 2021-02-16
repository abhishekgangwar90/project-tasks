import React from 'react';

import Button from '../../atoms/Button';
import Filters from '../../molecules/Filters';
import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <Button title="+ Add New Task" size="medium" color="green-dark" />
        <div className="navigation__filter u-margin-top-medium u-margin-bottom-medium">
          <Filters />
        </div>
        <div className="navigation__taskView">showing all tasks here</div>
      </div>
      <div className="navigation__footer">
        &#64; 2020 All rights reserved By Abhishek
      </div>
    </div>
  );
}

export default Navigation;
