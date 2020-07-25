import React from 'react';
import List from '@material-ui/core/List';

import TaskItem from './TaskItem';

/**
 * Lists all the tasks as TaskItem components
 * 
 * @param {Array} tasks An array with all the task to display.
 */
export default function TaskList({ tasks }) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </List>
  );
}
