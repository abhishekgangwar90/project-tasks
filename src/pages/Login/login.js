import React from 'react';

import './login.scss';
import CreateAccount from './CreateAccount/createAccount';
import SignIn from './SignIn/signIn';

function Login() {
  const [showLogin, setShowLogin] = React.useState(true);

  const handleComponentSwitch = (value) => {
    setShowLogin(value);
  };

  return (
    <div className="login">
      <div className={`login__card ${!showLogin && 'login__card--reverse'}`}>
        {showLogin ? (
          <CreateAccount onSignInClick={handleComponentSwitch} />
        ) : (
          <SignIn onSignUpClick={handleComponentSwitch} />
        )}
      </div>
    </div>
  );
}

export default Login;
