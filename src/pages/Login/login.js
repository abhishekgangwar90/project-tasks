import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';
import CreateAccount from './CreateAccount/createAccount';
import SignIn from './SignIn/signIn';
import { apiEndPoints } from '../../constants/apiEndPoints';

function Login({ signUpActionAsync }) {
  const [showLogin, setShowLogin] = React.useState(true);

  const handleComponentSwitch = (value) => {
    setShowLogin(value);
  };

  const handleSignUp = (data) => {
    signUpActionAsync(apiEndPoints.signUp, data);
  };

  const handleSignIn = () => {};

  return (
    <div className="login">
      <div className={`login__card ${!showLogin && 'login__card--reverse'}`}>
        {showLogin ? (
          <CreateAccount
            handleSignUp={handleSignUp}
            onSignInClick={handleComponentSwitch}
          />
        ) : (
          <SignIn
            handleSignIn={handleSignIn}
            onSignUpClick={handleComponentSwitch}
          />
        )}
      </div>
    </div>
  );
}

Login.defaultProps = {};

Login.propTypes = {
  signUpActionAsync: PropTypes.func.isRequired,
};

export default Login;
