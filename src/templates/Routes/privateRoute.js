import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

import { checkIfUserExist } from '../../common/storage';

function PrivateRoute({ component: Component, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        checkIfUserExist() ? (
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
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
