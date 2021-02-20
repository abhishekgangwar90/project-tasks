import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { appRoutes } from '../../config/routeConfig';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

function Routes({ isLoggedIn }) {
  return (
    <Router basename="/">
      <Switch>
        {appRoutes.public.map((route) => (
          <PublicRoute
            key={route.id}
            exact
            strict
            path={route.path}
            canRedirect={route.canRedirect}
            component={route.component}
            isLoggedIn={isLoggedIn}
          />
        ))}
        {appRoutes.private.map((route) => (
          <PrivateRoute
            key={route.id}
            exact
            strict
            path={route.path}
            component={route.component}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </Switch>
    </Router>
  );
}

Routes.defaultProps = {
  isLoggedIn: false,
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Routes;
