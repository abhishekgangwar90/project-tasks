import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

function Input({ name, classes, ...otherProps }) {
  return (
    <>
      <input
        name={name}
        id={name}
        autoComplete="off"
        className={`input ${classes}`}
        {...otherProps}
      />
      {/* <label htmlFor={name}>{name}</label> */}
    </>
  );
}

Input.defaultProps = {
  name: 'default',
  classes: '',
};

Input.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
};

export default Input;
