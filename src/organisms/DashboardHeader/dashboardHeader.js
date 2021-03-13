import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../atoms/Search';
import UserProfilePic from '../../atoms/UserProfilePic';
import './dashboardHeader.scss';

function DashboardHeader({ setSearchedTitleAction }) {
  const onTitleSearch = (e) => {
    setSearchedTitleAction({ searchTerm: e.target.value });
  };

  return (
    <header className="dashboard-header">
      <h1 className="dashboard-header__logo">Tasky</h1>
      <div className="dashboard-header__content">
        <div className="dashboard-header__search">
          <SearchBar placeholder="Search tasks" onChange={onTitleSearch} />
        </div>
        <div className="dashboard-header__profile">
          <UserProfilePic />
          <div className="dashboard-header__account u-margin-left-medium" />
        </div>
      </div>
    </header>
  );
}

DashboardHeader.propTypes = {
  setSearchedTitleAction: PropTypes.func.isRequired,
};

export default DashboardHeader;
