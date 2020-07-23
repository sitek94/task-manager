import React from 'react';
import TopMenu from './layout/TopMenu';
import SideMenu from './layout/SideMenu';
import Layout from './layout/Layout';
import MainContent from './layout/MainContent';

export default function App() {
  return (
    <Layout>
      <TopMenu />
      <SideMenu />
      <MainContent />
    </Layout>
  );
};
