import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

function CustomSelect({ optionList, ...otherProps }) {
  return <Select options={optionList} {...otherProps} />;
}

CustomSelect.defaultProps = {
  optionList: [{}],
};

CustomSelect.propTypes = {
  optionList: PropTypes.arrayOf(Object),
};

export default CustomSelect;
