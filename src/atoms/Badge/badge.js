import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

function Badge({ title, selected, ...otherProps }) {
  return (
    <button
      type="button"
      name={title}
      className={`badge ${selected && 'badge--selected'}`}
      {...otherProps}
    >
      {title}
    </button>
  );
}

Badge.defaultProps = {
  selected: false,
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default Badge;
