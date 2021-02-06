import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__description">
          <h1>TASKY</h1>
          <h2>Welcome Back</h2>
          <p>
            To keep connected with us, Please login with your personal
            information.
          </p>
        </div>
        <div className="login__content">Content</div>
      </div>
    </div>
  );
}

export default Login;
