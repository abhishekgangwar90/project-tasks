import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../atoms/Badge';
import './filters.scss';

function Filters({ selectedFilter, setSelectedFilterAction }) {
  const badges = ['All', 'Completed', 'Pending'];

  return (
    <div className="filters">
      {badges.map((elm) => {
        return (
          <Badge
            key={elm}
            onClick={() => setSelectedFilterAction({ selectedFilter: elm })}
            title={elm}
            selected={elm === selectedFilter}
          />
        );
      })}
    </div>
  );
}

Filters.defaultProps = {};

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilterAction: PropTypes.func.isRequired,
};

export default Filters;
