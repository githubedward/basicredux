import todoReducer from '../state-manager/reducers/todos';
import visibilityFilter from '../state-manager/reducers/visibilityFilter';
import * as types from '../state-manager/actions/constants';

const deepFreeze = require('deep-freeze');

describe('todos reducer', () => {
  const initialState = []

  deepFreeze(initialState);

  // state is undefined
  it('should return initial state', () => {
    expect(todoReducer(undefined, {})).toEqual([])
  })

  // add to do
  it('should handle ADD_TODO', () => {
    expect(todoReducer(initialState, {
      type: types.ADD_TODO,
      text: 'Run tests'
    }))
    .toEqual([
      {
        text: 'Run tests',
        completed: false
      }
    ])
  })
})