import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import todoApp from './state-manager/reducers';

import {
    addToDo,
    toggleToDo,
    setVisibilityFilter,
    VisibilityFilters
} from './state-manager/actions'

const store = createStore(todoApp);

// log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addToDo('Learn about actions'))
store.dispatch(addToDo('Learn about reducers'))
store.dispatch(addToDo('Learn about store'))
store.dispatch(toggleToDo(0));
store.dispatch(toggleToDo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// stop listening to state updates
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
