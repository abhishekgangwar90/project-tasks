import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

import { checkIfUserExist } from '../../common/storage';

function PublicRoute({ component: Component, canRedirect, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        canRedirect && checkIfUserExist() ? (
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
  component: PropTypes.element.isRequired,
  canRedirect: PropTypes.bool,
};

export default PublicRoute;
