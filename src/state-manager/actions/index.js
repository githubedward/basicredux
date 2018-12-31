import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './constants';

// action creators
export function addToDo(text) {
    return { type: ADD_TODO, text }
}

export function toggleToDo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}