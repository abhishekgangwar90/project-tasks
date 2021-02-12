import React from 'react';
import { checkIfUserExist } from '../../common/storage';
import Routes from '../Routes';

function Layout() {
  console.log(checkIfUserExist());

  return <Routes />;
}

export default Layout;
