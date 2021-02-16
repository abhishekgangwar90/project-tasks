import React from 'react';

function Filters() {
  return (
    <>
      sort By:{' '}
      <select>
        <option>Date</option>
        <option>Name</option>
        <option>Modified Date</option>
      </select>
    </>
  );
}

export default Filters;
