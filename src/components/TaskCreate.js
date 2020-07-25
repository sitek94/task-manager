import React from 'react';
import { ListItem, TextField, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { ICON_SIZE } from './App';

/**
 * Creates new task
 * 
 * @param {Function} newTaskHandler #TODO
 */
export default function TaskCreate() {
  return (
    <div>
      <ListItem component="div">
        <IconButton edge="start" aria-label="create new task">
          <AddCircleIcon color="primary" fontSize={ICON_SIZE} />
        </IconButton>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Task description"
          variant="outlined"
        />
      </ListItem>
    </div>
  );
}
