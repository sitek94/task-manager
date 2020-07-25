import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/Inbox';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DoneIcon from '@material-ui/icons/Done';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const MENU_ITEMS = [
  { text: 'All', icon: <InboxIcon /> },
  { text: 'Important', icon: <NotificationImportantIcon /> },
  { text: 'Active', icon: <AssignmentIcon /> },
  { text: 'Completed', icon: <DoneIcon /> },
];

export default function SideMenu({ children }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        {children}
      </div>
    </Drawer>
  );
}
