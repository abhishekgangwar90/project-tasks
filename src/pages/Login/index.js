import { connect } from 'react-redux';

import Login from './login';
import { signUpActionAsync } from '../../store/middleware';

const mapStateToProps = (store) => {
  const { auth } = store;
  return {
    auth,
  };
};

const dispatchActions = {
  signUpActionAsync,
};

export default connect(mapStateToProps, dispatchActions)(Login);
