import React from 'react';

import { Layout } from './layout';
import AddTask from './AddTask';
import FilterList from './FilterList';
import VisibleTaskList from '../containers/VisibleTodoList';

// Default icon size for the AddTask and TaskItem components
export const ICON_SIZE = 'medium';

const App = () => (
  <Layout
    sideMenu={<FilterList />}
    contentTop={<AddTask />}
    contentBottom={<VisibleTaskList />}
  />
);

export default App;