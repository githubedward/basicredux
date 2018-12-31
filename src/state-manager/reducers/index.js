import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

// todoApp reducer
// const toDoApp = (state = {}, action) => {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

// boilerplate logic same as above using combineReducers
const toDoApp = combineReducers({
    visibilityFilter,
    todos
})

export default toDoApp;

