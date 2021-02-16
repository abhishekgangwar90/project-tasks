import React from 'react';
import Badge from '../../atoms/Badge';
import './filters.scss';

function Filters() {
  const [selectedFilter, setSelectedFilter] = React.useState('All');
  const badges = ['All', 'Completed', 'Pending'];

  return (
    <div className="filters">
      {badges.map((elm) => {
        return (
          <Badge
            key={elm}
            onClick={() => setSelectedFilter(elm)}
            title={elm}
            selected={elm === selectedFilter}
          />
        );
      })}
    </div>
  );
}

export default Filters;
