import { connect } from 'react-redux';

import DashboardHeader from './dashboardHeader';
import { setSearchedTitleAction } from '../../store/actions';

const mapStateToProps = (state) => {
  return state;
};

const dispatchActions = {
  setSearchedTitleAction,
};

export default connect(mapStateToProps, dispatchActions)(DashboardHeader);
