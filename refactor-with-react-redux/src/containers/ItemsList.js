import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';
import { initTodos, toggleTodoComplete, updateTodoText, deleteTodoItem } from '../actions/actions';

class ItemsListContainer extends Component {
  componentWillMount() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.props.initTodos(todos);
  }

  render() {
    return (
      <ItemsList
        deleteTodoItem={this.props.deleteTodoItem}
        updateTodoText={this.props.updateTodoText}
        toggleTodoComplete={this.props.toggleTodoComplete}
        todos={this.props.todos}
      />
    );
  }
}

ItemsListContainer.propTypes = {
  initTodos: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
  updateTodoText: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

const getFilteredTodoItems = (filter, todos) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(item => !item.completed);
    case 'COMPLETED':
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getFilteredTodoItems(state.filter, state.todos),
});

const mapDispatchToProps = dispatch => ({
  initTodos: (todos) => {
    dispatch(initTodos(todos));
  },
  deleteTodoItem: (id) => {
    dispatch(deleteTodoItem(id));
  },
  updateTodoText: (id, text) => {
    dispatch(updateTodoText(id, text));
  },
  toggleTodoComplete: (id) => {
    dispatch(toggleTodoComplete(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListContainer);
