import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';
import IconError from '../../atoms/IconError';

function Error({ isTextError, error, smallText }) {
  if (isTextError) {
    return (
      <div className={`error error__text ${smallText && 'error__text--small'}`}>
        <IconError />
        {error.header}
      </div>
    );
  }

  return '';
}

Error.defaultProps = {
  error: {
    header: '',
    subtitle: '',
  },
  smallText: true,
  isTextError: true,
};

Error.propTypes = {
  error: PropTypes.instanceOf(Object),
  smallText: PropTypes.bool,
  isTextError: PropTypes.bool,
};

export default Error;
