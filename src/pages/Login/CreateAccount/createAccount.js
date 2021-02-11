import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import {
  createAccountConstants,
  initialState,
  useCreateAccountReducer,
} from './useCreateAccountReducer';
import Error from '../../../molecules/Error';

function CreateAccount({ onSignInClick, handleSignUp }) {
  const [state, dispatch] = React.useReducer(
    useCreateAccountReducer,
    initialState
  );

  const onSignUpClick = (e) => {
    e.preventDefault();
    if (state.name && state.email && state.password) {
      handleSignUp(state);
    }
  };

  const onFieldChange = (field, e) => {
    dispatch({
      type: createAccountConstants.CHANGE_FIELD_ACTION,
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
        <form onSubmit={onSignUpClick} className="login__form">
          <Input
            name="Name"
            classes="u-margin-bottom-small"
            placeholder="Enter Your Name"
            type="text"
            value={state.name}
            onChange={(e) => onFieldChange('name', e)}
            required
          />
          <Input
            name="Email"
            classes="u-margin-bottom-small"
            placeholder="Enter Email Address"
            type="email"
            value={state.email}
            onChange={(e) => onFieldChange('email', e)}
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
          {state.error && <Error isTextError error={{ header: state.error }} />}
          <Button
            type="submit"
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
  handleSignUp: PropTypes.func.isRequired,
};

export default CreateAccount;
