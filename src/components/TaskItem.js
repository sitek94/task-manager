import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import {
  CheckBox,
  CheckBoxOutlineBlank as CheckBoxBlank,
  Delete,
} from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

import { ICON_SIZE } from './App';

/**
 * A single task item
 *
 * @param {Number} id task unique id
 * @param {String} text description of the task
 * @param {Boolean} completed Task is either completed or not
 * @param {Function} onClick Handles clicking on a task and on the checkbox icon
 * @param {Function} onDeleteClick Handles clicking on the trash icon
 */
const TaskItem = ({
  text,
  completed,
  onClick,
  onDeleteClick
}) => {
  const handleClick = () => {
    onClick()
  };
  const handleDeleteClick = () => onDeleteClick();

  const renderCheckboxIcon = () => {
    if (completed) {
      // Task is completed - render green checked icon
      return <CheckBox style={{ color: green[500] }} fontSize={ICON_SIZE} />
    }
    // By default render unchecked icon
    return <CheckBoxBlank fontSize={ICON_SIZE} />
  }

  return (
    <ListItem button onClick={handleClick}>
      <IconButton edge="start">
        {renderCheckboxIcon()}
      </IconButton>
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete the task"
          onClick={handleDeleteClick}
        >
          <Delete color="secondary" fontSize={ICON_SIZE} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
TaskItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskItem;
