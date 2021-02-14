import React from 'react';
import DashboardHeader from '../../organisms/DashboardHeader';
import Navigation from '../../organisms/Navigation';
import './dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <main className="dashboard__main">
        <nav className="dashboard__nav">
          <Navigation />
        </nav>
        <div className="dashboard__content">container</div>
      </main>
    </div>
  );
}

export default Dashboard;
