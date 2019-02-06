import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toDoApp from './state/reducers/index';

const store = createStore(toDoApp);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()))

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
