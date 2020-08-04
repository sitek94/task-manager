import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import TaskItem from './TaskItem';

/**
 * Lists given array of tasks
 *
 * @param {Array} tasks An array with all the tasks to display
 * @param {Function} onTaskClick Toggles completed state (true/false)
 * @param {Function} onTaskDeleteClick Deletes the task
 */
const TaskList = ({ tasks, onTaskClick, onTaskDeleteClick }) => (
  <List dense>
    {tasks.map((task) => {
      return (
        <TaskItem
          key={task.id}
          {...task}
          onClick={() => onTaskClick(task.id)}
          onDeleteClick={() => onTaskDeleteClick(task.id)}
        />
      );
    })}
  </List>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDeleteClick: PropTypes.func.isRequired,
};

export default TaskList;
