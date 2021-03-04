import { connect } from 'react-redux';
import Navigation from './navigation';

const mapStateToProps = (state) => {
  return state;
};

const dispatchActions = {};

export default connect(mapStateToProps, dispatchActions)(Navigation);
