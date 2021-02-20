import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, isLoggedIn, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" {...props} />
        )
      }
    />
  );
}

PrivateRoute.defaultProps = {};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoute;
