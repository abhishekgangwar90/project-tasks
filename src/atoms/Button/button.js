import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

function Button({ type, title, animated, classes, color, ...otherProps }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`btn btn--${color} btn--large ${
        animated && 'btn--animated'
      } ${classes}`}
      {...otherProps}
      data-test="button-component"
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  title: 'default',
  animated: false,
  classes: '',
  color: 'white',
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  animated: PropTypes.bool,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['white', 'green']),
};

export default Button;
