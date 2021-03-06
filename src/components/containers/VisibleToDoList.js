import { connect } from 'react-redux';
import { VisibilityFilters } from '../../state/actions/constants';
import { toggleToDo } from '../../state/actions/index';
import ToDoList from '../presentationals/ToDoList'

const getVisibleTodos = (todos, filter) => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;
  switch(filter) {
    case SHOW_ALL: return todos
    case SHOW_COMPLETED: return todos.filter(t => t.completed)
    case SHOW_ACTIVE: return todos.filter(t => !t.completed)
    default: throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter) /* previously was getVisibleTodos(state.todos, state.visibilityFilter) */
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleToDo: id => {
      dispatch(toggleToDo(id))
    }
  }
}

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)

export default VisibleToDoList;