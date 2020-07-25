import React from 'react';
import { Inbox, NotificationImportant, Assignment, Done } from '@material-ui/icons';

import { Layout } from './layout';
import TaskCreate from './TaskCreate';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';


// Default icon size for the TaskCreate and TaskItem components
export const ICON_SIZE = "large";

// Preset filters for the TaskFilter component
const FILTERS = [
  { text: 'All', icon: <Inbox /> },
  { text: 'Important', icon: <NotificationImportant /> },
  { text: 'Active', icon: <Assignment /> },
  { text: 'Completed', icon: <Done /> },
];

// Default tasks
const TASKS = [
  {
    userId: 1,
    id: 1,
    description: "You can create new todos in the creator above",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    description: "Mark todos as completed by clicking on the checkbox",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    description: "Filter todos in the sidebar on the left",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    description: "Delete todos by clicking on trash icon",
    completed: true
  },
]



export default function App() {

  // Render helper methods
  const renderTaskFilter = (filters) => <TaskFilter filters={filters} />
  const renderTaskCreate = () => <TaskCreate />
  const renderTaskList = (tasks) => <TaskList tasks={tasks} />

  return (
    <Layout
      sideMenu={renderTaskFilter(FILTERS)}
      contentTop={renderTaskCreate()}
      contentBottom={renderTaskList(TASKS)}
    />
  );
}
