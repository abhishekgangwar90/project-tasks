import { connect } from 'react-redux';
import { setSelectedFilterAction } from '../../store/actions';
import Filters from './filters';

const mapStateToProps = ({ custom }) => {
  const { selectedFilter } = custom;
  return {
    selectedFilter,
  };
};
const dispatchActions = {
  setSelectedFilterAction,
};

export default connect(mapStateToProps, dispatchActions)(Filters);
