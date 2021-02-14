import React from 'react';
import SearchBar from '../../atoms/Search';
import UserProfilePic from '../../atoms/UserProfilePic';
import './dashboardHeader.scss';

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <h1 className="dashboard-header__logo">Tasky</h1>
      <div className="dashboard-header__content">
        <div className="dashboard-header__search">
          <SearchBar placeholder="Search tasks" />
        </div>
        <div className="dashboard-header__profile">
          <UserProfilePic />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
