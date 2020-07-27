import { combineReducers } from 'redux';
import tasks from './tasks';
import visibilityFilter from './visibilityFilter';

// Export combined reducers
export default combineReducers({
  tasks,
  visibilityFilter
})

