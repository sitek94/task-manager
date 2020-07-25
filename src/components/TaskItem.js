import React from 'react';
import { IconButton, ListItem, ListItemText } from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank as CheckBoxBlank, Delete } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import { ICON_SIZE } from './App';

/**
 * A single task item component
 * 
 * @param 
 * @param {String} description Description of the task.
 * @param {Boolean} completed The task is completed or not.
 */
export default function TaskItem({ description, completed }) {
  const [checked, setChecked] = React.useState(completed);

  const handleToggle = () => {
    setChecked(!checked);
  }

  return (
    <ListItem button onClick={handleToggle}>
      <IconButton edge="start" onClick={handleToggle}>
        {checked && <CheckBox style={{ color: green[500] }} fontSize={ICON_SIZE} />}
        {!checked && <CheckBoxBlank fontSize={ICON_SIZE} />}
      </IconButton>
      <ListItemText
        primary={description}
      />
      <IconButton edge="end" aria-label="add-taksk">
        <Delete color="secondary" fontSize={ICON_SIZE} />
      </IconButton>
    </ListItem>
  );
}
