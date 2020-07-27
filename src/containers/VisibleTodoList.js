import { connect } from 'react-redux';

import { VisibilityFilters } from '../actions';
import { toggleTask, removeTask } from '../actions';
import TaskList from '../components/TaskList';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleTaskList = (tasks, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return tasks.filter((task) => task.completed);
    case SHOW_ACTIVE:
      return tasks.filter((task) => !task.completed);
    case SHOW_ALL:
    default:
      return tasks;
  }
};

const mapStateToProps = (state) => {
  return {
    tasks: getVisibleTaskList(state.tasks, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => dispatch(toggleTask(id)),
    onTaskDeleteClick: (id) => dispatch(removeTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);