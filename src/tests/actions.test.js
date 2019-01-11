import * as actions from '../state/actions/index';
import * as types from '../state/actions/constants';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Learn Redux';
    const expectedAction = {
      type: types.ADD_TODO,
      text
    }
    expect(actions.addToDo(text)).toEqual(expectedAction)
  })

  it('should toggle a todo', () => {
    const index = 1;
    const expectedAction = {
      type: types.TOGGLE_TODO,
      index
    }
    expect(actions.toggleToDo(index)).toEqual(expectedAction)
  })

  it('should set a filter', () => {
    const filter = types.VisibilityFilters.SHOW_ACTIVE;
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      filter
    }
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
  })
})

