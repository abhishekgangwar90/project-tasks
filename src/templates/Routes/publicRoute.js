import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

function PublicRoute({
  component: Component,
  isLoggedIn,
  canRedirect,
  ...otherProps
}) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        canRedirect && isLoggedIn ? (
          <Redirect to="/" {...props} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

PublicRoute.defaultProps = {
  canRedirect: false,
};

PublicRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  canRedirect: PropTypes.bool,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default PublicRoute;
