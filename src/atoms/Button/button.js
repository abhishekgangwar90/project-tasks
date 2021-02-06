import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

function Button({ title, animated, classes, color }) {
  return (
    <button
      type="button"
      className={`btn btn--${color} btn--large ${
        animated && 'btn--animated'
      } ${classes}`}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  title: 'default',
  animated: false,
  classes: '',
  color: 'white',
};

Button.propTypes = {
  title: PropTypes.string,
  animated: PropTypes.bool,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['white', 'green']),
};

export default Button;
