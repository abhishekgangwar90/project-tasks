import React from 'react';
import Select from '../../atoms/Select';

function Filters() {
  return (
    <>
      sort By:{' '}
      <Select
        optionList={[
          { label: 'Date', value: 'Date' },
          { label: 'Name', value: 'Name' },
          { label: 'Modified Dates', value: 'Modified' },
        ]}
      />
    </>
  );
}

export default Filters;
