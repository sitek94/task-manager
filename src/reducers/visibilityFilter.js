import { VisibilityFilters } from '../actions'
import {
  SET_VISIBILITY_FILTER,
} from '../actions';

const initialFilter = VisibilityFilters.SHOW_ALL;

const visibilityFilter = (state = initialFilter, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;