import React from 'react';
import SearchBar from '../../atoms/Search';
import './dashboardHeader.scss';

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <h1 className="dashboard-header__logo">Tasky</h1>
      <div className="dashboard-header__content">
        <SearchBar />
      </div>
    </header>
  );
}

export default DashboardHeader;
