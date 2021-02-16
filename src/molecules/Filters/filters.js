import React from 'react';
import Badge from '../../atoms/Badge';
import './filters.scss';

function Filters() {
  return (
    <div className="filters">
      <Badge title="All" />
      <Badge title="Recent" selected />
      <Badge title="Selected" />
    </div>
  );
}

export default Filters;
