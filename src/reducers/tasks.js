import {
  TOGGLE_TASK,
  ADD_TASK,
  REMOVE_TASK,
} from '../actions';

const TASKS = [
  {
    userId: 1,
    id: 1,
    text: "You can create new tasks in the creator above",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    text: "Mark tasks as completed by clicking on the checkbox",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    text: "Filter tasks in the sidebar on the left",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    text: "Delete tasks by clicking on trash icon",
    completed: true
  },
]

const tasks = (state = TASKS, action) => {
  switch (action.type) {
    // Create a new task using the text from the action
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    // Remove the task with the matching id
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.id);

    // Toggle completed state of the task with matching id
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    default:
      return state;
  }
}

export default tasks;