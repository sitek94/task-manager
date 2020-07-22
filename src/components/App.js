import React from 'react';

import { Content, Drawer, Topbar, Layout } from './layout';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Layout>
      <Topbar isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={isDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Content />
    </Layout>
  );
};

export default App;
