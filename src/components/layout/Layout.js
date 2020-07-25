import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MainContent, SideMenu, TopMenu } from './';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Layout({ sideMenu, contentTop, contentBottom }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopMenu />
      <SideMenu>{sideMenu}</SideMenu>
      <MainContent>
        {contentTop}
        {contentBottom}
      </MainContent>
    </div>
  );
}
