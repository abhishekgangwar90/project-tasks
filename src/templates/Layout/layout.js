import React, { useEffect } from 'react';
import store from '../../store';
import Routes from '../Routes';

import { getAuthDataFromStorage } from '../../common/storage';
import { checkIfUserLoggedIn } from '../../utils/appUtils';
import { signInSuccessAction } from '../../store/actions';

function Layout() {
  let isLoggedIn = false;
  const isLoggedInFromState = checkIfUserLoggedIn(store.getState());

  /**
   * Checks if User login data present in Redux State
   * if yes then pass that along
   * if not then search in cookies
   * if present then fire signInSuccess Action
   */
  if (isLoggedInFromState) {
    isLoggedIn = isLoggedInFromState;
  } else {
    const authData = getAuthDataFromStorage();

    if (authData && authData.isLoggedIn && authData.authToken) {
      isLoggedIn = authData.isLoggedIn;
      store.dispatch(
        signInSuccessAction({
          isLoggedIn: true,
          authToken: authData.authToken,
        })
      );
    }
  }

  useEffect(() => {
    console.log('hello');
  }, []);

  return <Routes isLoggedIn={isLoggedIn} />;
}

export default Layout;
