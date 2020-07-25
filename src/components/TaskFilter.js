import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


/**
 * Lists available filters to conditionally render tasks
 * 
 * @param {Array} filters An array with the availabale filters.
 */
export default function TaskFilter({ filters }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const renderFilterList = (filters) => {
    return filters.map((filter, index) => (
      <ListItem
        key={filter.text}
        button
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
      >
        <ListItemIcon>{filter.icon}</ListItemIcon>
        <ListItemText primary={filter.text} />
      </ListItem>
    ));
  };

  return (
    <List component="nav" aria-label="task filtering options">
      {renderFilterList(filters)}
    </List>
  );
}
