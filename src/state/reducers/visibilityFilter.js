import { VisibilityFilters } from '../actions/constants';
import { SET_VISIBILITY_FILTER } from '../actions/constants'

const { SHOW_ALL } = VisibilityFilters;
// visibility reducer
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
      case SET_VISIBILITY_FILTER:
          return action.filter
      default:
          return state
  }
}

export default visibilityFilter;