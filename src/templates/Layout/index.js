import { connect } from 'react-redux';
import Layout from './layout';

const mapStateToProps = (state) => {
  return state;
};

const dispatchActions = {};

export default connect(mapStateToProps, dispatchActions)(Layout);
