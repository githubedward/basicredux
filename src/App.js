import React, { Component } from 'react';
import Footer from './components/presentationals/Footer';
import AddToDo from './components/containers/AddToDo';
import VisibleToDoList from './components/containers/VisibleToDoList';
import './styles/App.css';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <section className='todo-container'>
          <h2>Things to Do</h2>
          <AddToDo />
          <VisibleToDoList />
          <Footer />
        </section>
      </div>
    );
  }
}
