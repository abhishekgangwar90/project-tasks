import React from 'react';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';

function SignIn() {
  return (
    <>
      <div className="login__description">
        <h1>TASKY</h1>
        <h2 className="u-margin-top-large">Hello, Friend!</h2>
        <p className="u-margin-top-small u-margin-bottom-small">
          Enter your personal details and start your journey with us.
        </p>
        <Button
          title="Sign Up"
          color="green"
          classes="u-margin-top-large u-margin-bottom-large"
          animated
        />
      </div>
      <div className="login__content">
        <h3 className="u-margin-bottom-large">Sign in to TASKY</h3>
        <p className="u-margin-bottom-small">or use your email for login.</p>
        <form action="/" className="login__form">
          <Input
            name="Email"
            classes="u-margin-bottom-small"
            placeholder="Enter Email Address"
            type="email"
            required
          />
          <Input
            name="Password"
            classes="u-margin-bottom-small"
            placeholder="Enter password"
            type="password"
            required
          />
          <Button
            title="Sign In"
            color="green"
            classes="u-margin-top-medium u-margin-bottom-medium"
            animated
          />
        </form>
      </div>
    </>
  );
}

export default SignIn;
