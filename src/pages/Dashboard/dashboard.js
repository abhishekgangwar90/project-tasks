import React from 'react';
import Content from '../../organisms/Content';
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
        <div className="dashboard__content">
          <Content />
          <footer>
            &#64; 2020 Designed and Created By Abhishek, All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
