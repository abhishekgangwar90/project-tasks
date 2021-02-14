import React from 'react';

import Button from '../../atoms/Button';
import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <Button title="+ Add New Task" size="medium" color="green-dark" />
      </div>
      <div className="navigation__footer">
        &#64; 2020 All rights reserved By Abhishek
      </div>
    </div>
  );
}

export default Navigation;
