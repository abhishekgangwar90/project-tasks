import React from 'react';
import Routes from '../Routes';

import { getAuthData } from '../../common/storage';

function Layout() {
  const { isLoggedIn } = getAuthData();
  return <Routes isLoggedIn={isLoggedIn} />;
}

export default Layout;
