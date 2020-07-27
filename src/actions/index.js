// ACTION TYPES
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// OTHER CONSTANTS
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// ACTION CREATORS
let nextTaskId = 99;
export const addTask = (text) => {
  return { 
    type: ADD_TASK,
    id: nextTaskId++,
    text
  }
}

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id
  }
}

export const toggleTask = (id) => {
  return { 
    type: TOGGLE_TASK,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return { 
    type: SET_VISIBILITY_FILTER,
    filter
  }
}