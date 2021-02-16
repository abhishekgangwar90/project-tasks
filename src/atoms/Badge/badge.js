import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

function Badge({ title, selected }) {
  return (
    <div className={`badge ${selected && 'badge--selected'}`}>{title}</div>
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
