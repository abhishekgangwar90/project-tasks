import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { appRoutes } from '../../config/routeConfig';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

function Routes() {
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
          />
        ))}
        {appRoutes.private.map((route) => (
          <PrivateRoute
            key={route.id}
            exact
            strict
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
