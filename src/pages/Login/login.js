import React from 'react';

import './login.scss';
import CreateAccount from './CreateAccount/createAccount';
import SignIn from './SignIn/signIn';

function Login() {
  const [showLogin, canShowLogin] = React.useState(false);

  return (
    <div className="login">
      <div className="login__card">
        {showLogin ? <CreateAccount canShowLogin={canShowLogin} /> : <SignIn />}
      </div>
    </div>
  );
}

export default Login;
