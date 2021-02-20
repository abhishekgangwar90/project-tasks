import React from 'react';
import Routes from '../Routes';

import { checkIfUserExist } from '../../common/storage';

function Layout() {
  const isLoggedIn = checkIfUserExist();
  return <Routes isLoggedIn={isLoggedIn} />;
}

export default Layout;
