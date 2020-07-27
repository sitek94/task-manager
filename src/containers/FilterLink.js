import { connect } from 'react-redux';
import SideLink from '../components/SideLink';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(SideLink);

export default FilterLink;
