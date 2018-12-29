import { 
    VisibilityFilters, 
    SET_VISIBILITY_FILTER, 
    ADD_TODO, 
    TOGGLE_TODO 
} from './actions';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;

// todos reducer
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                    if (index === action.index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
        default:
            return state
    }
}

// visibility reducer
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

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

