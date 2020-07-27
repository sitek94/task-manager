import React from 'react';
import List from '@material-ui/core/List';
import {
  Inbox,
  Assignment,
  Done,
} from '@material-ui/icons';

import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const FilterList = () => (
  <List>
    <FilterLink filter={SHOW_ALL} icon={<Inbox />}>
      All
    </FilterLink>
    <FilterLink filter={SHOW_ACTIVE} icon={<Assignment />}>
      Active
    </FilterLink>
    <FilterLink filter={SHOW_COMPLETED} icon={<Done />}>
      Completed
    </FilterLink>
  </List>
);

export default FilterList;
