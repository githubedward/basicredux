import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../../state/actions/constants';

const Footer = () => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;
    return (
      <footer>
        Show: <FilterLink filter={SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
      </footer>
    )
}

export default Footer;