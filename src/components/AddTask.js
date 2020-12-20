import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { ListItem, TextField, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { addTask } from '../actions';
import { ICON_SIZE } from './App';

/**
 * Creates new task
 * 
 * @param {Function} addTak Dispatches an action that creates a new task
 */
const AddTask = ({ addTask }) => {
  const [inputText, setInputText] = useState('');
  const inputElement = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    // Dispatch action that adds new task
    addTask(inputText);

    // Reset input field and focus it
    setInputText('');
    inputElement.current.focus();
  }

  return (
    <ListItem 
      component="form"
      onSubmit={onSubmit}
    >
      <IconButton 
        edge="start" 
        aria-label="create new task"
        type="submit"
      >
        <AddCircleIcon color="primary" fontSize={ICON_SIZE} />
      </IconButton>
      <TextField
        ref={inputElement}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        id="outlined-basic"
        label="Task description"
        variant="outlined"
        required
        fullWidth
      />
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text) => dispatch(addTask(text))
  }
}

export default connect(null, mapDispatchToProps)(AddTask);
