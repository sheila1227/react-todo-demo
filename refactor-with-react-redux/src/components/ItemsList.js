import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function ItemsList({ deleteTodoItem, toggleTodoComplete, updateTodoText, todos }) {
  return (
    <div>
      {todos.map(item =>
        <TodoItem
          toggleTodoComplete={toggleTodoComplete}
          deleteTodoItem={deleteTodoItem}
          updateTodoText={updateTodoText}
          todo={item}
          key={item.id}
        />)}
    </div>
  );
}

ItemsList.propTypes = {
  deleteTodoItem: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
  updateTodoText: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default ItemsList;
