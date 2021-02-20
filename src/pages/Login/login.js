import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';
import CreateAccount from '../../organisms/CreateAccount';
import SignIn from '../../organisms/SignIn';

function Login({ signUpActionAsync, signInActionAsync }) {
  const [showLogin, setShowLogin] = React.useState(true);

  const handleComponentSwitch = (value) => {
    setShowLogin(value);
  };

  const handleSignUp = (data) => {
    signUpActionAsync(data);
  };

  const handleSignIn = (data) => {
    console.log(data);
    signInActionAsync(data);
  };

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
  signInActionAsync: PropTypes.func.isRequired,
};

export default Login;
