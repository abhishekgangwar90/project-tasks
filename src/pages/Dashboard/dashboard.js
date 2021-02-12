import React from 'react';
import './dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">header</header>
      <main className="dashboard__main">
        <nav className="dashboard__nav">navigation</nav>
        <div className="dashboard__content">container</div>
      </main>
    </div>
  );
}

export default Dashboard;
