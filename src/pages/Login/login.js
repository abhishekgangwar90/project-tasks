import React from 'react';
import Button from '../../atoms/Button';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__description">
          <h1>TASKY</h1>
          <h2 className="u-margin-top-large">Welcome Back!</h2>
          <p className="u-margin-top-small u-margin-bottom-small">
            To keep connected with us, Please login with your personal
            information.
          </p>
          <Button
            title="Sign In"
            color="green"
            classes="u-margin-top-large u-margin-bottom-large"
            animated
          />
        </div>
        <div className="login__content">
          <h3>Create Account</h3>
          <p>or use your email for registration.</p>
          <form action="/" className="login__form">
            hello
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
