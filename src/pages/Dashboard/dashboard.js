import React from 'react';
import moment from 'moment';
import Content from '../../organisms/Content';
import DashboardHeader from '../../organisms/DashboardHeader';
import Navigation from '../../organisms/Navigation';
import './dashboard.scss';

function Dashboard() {
  const currentYear = moment(new Date()).format('YYYY');

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
            &#64; {currentYear} Designed and Created By Abhishek Gangwar, All
            rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
