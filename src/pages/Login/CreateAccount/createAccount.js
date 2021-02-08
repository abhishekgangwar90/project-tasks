import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';

function CreateAccount({ onSignInClick }) {
  return (
    <>
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
          onClick={() => onSignInClick(false)}
        />
      </div>
      <div className="login__content">
        <h3 className="u-margin-bottom-large">Create Account</h3>
        <p className="u-margin-bottom-small">
          or use your email for registration.
        </p>
        <form action="/" className="login__form">
          <Input
            name="Name"
            classes="u-margin-bottom-small"
            placeholder="Enter Your Name"
            type="text"
            required
          />
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
            title="Sign Up"
            color="green"
            classes="u-margin-top-medium u-margin-bottom-medium"
            animated
          />
        </form>
      </div>
    </>
  );
}

CreateAccount.defaultProps = {
  onSignInClick: () => {},
};

CreateAccount.propTypes = {
  onSignInClick: PropTypes.func,
};

export default CreateAccount;
