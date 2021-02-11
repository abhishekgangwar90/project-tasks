import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import {
  initialState,
  signInConstants,
  signInReducer,
} from './useSignInReducer';

function SignIn({ onSignUpClick, handleSignIn }) {
  const [state, dispatch] = React.useReducer(signInReducer, initialState);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      handleSignIn(state);
    }
  };

  const onFieldChange = (field, e) => {
    dispatch({
      type: signInConstants.CHANGE_FIELD_ACTION,
      payload: {
        field,
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <div className="login__description">
        <h1>TASKY</h1>
        <h2 className="u-margin-top-large">Hello, Friend!</h2>
        <p className="u-margin-top-small u-margin-bottom-small">
          Enter your personal details and kick start your journey with us.
        </p>
        <Button
          title="Sign Up"
          color="green"
          classes="u-margin-top-large u-margin-bottom-large"
          animated
          onClick={() => onSignUpClick(true)}
        />
      </div>
      <div className="login__content">
        <h3 className="u-margin-bottom-large">Sign in to TASKY</h3>
        <p className="u-margin-bottom-small">or use your email for login.</p>
        <form onSubmit={onFormSubmit} className="login__form">
          <Input
            name="Email"
            classes="u-margin-bottom-small"
            placeholder="Enter Email Address"
            value={state.email}
            onChange={(e) => onFieldChange('email', e)}
            type="email"
            required
          />
          <Input
            name="Password"
            classes="u-margin-bottom-small"
            placeholder="Enter password"
            type="password"
            value={state.password}
            onChange={(e) => onFieldChange('password', e)}
            required
          />
          <Button
            type="submit"
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

SignIn.defaultProps = {
  onSignUpClick: () => {},
};

SignIn.propTypes = {
  onSignUpClick: PropTypes.func,
  handleSignIn: PropTypes.func.isRequired,
};

export default SignIn;
