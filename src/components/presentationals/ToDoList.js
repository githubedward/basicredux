import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo'

export default class ToDoList extends Component {
  render() {
    const { todos, onToggleToDo } = this.props;
    return (
      <ul className='todo'>
        {todos.map((todo, index) => {
          return <ToDo key={index} {...todo} onClick={() => onToggleToDo(index)} />
        })}
      </ul>
    )
  }
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggleToDo: PropTypes.func.isRequired
}