import { connect } from 'react-redux';

import Login from './login';
import { signUpActionAsync, signInActionAsync } from '../../store/middleware';

const mapStateToProps = (store) => {
  const { auth } = store;
  return {
    auth,
  };
};

const dispatchActions = {
  signUpActionAsync,
  signInActionAsync,
};

export default connect(mapStateToProps, dispatchActions)(Login);
