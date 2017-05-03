import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './../css/ItemsList.css';

function ItemsList({ deleteTodoItem, onItemStatusToggle, updateItem, todos }) {
  return (
    <div>
      {todos.map(item =>
        <TodoItem
          onItemStatusToggle={onItemStatusToggle}
          deleteTodoItem={deleteTodoItem}
          updateItem={updateItem}
          todo={item}
          key={item.id}
        />)}
    </div>
  );
}

ItemsList.propTypes = {
  deleteTodoItem: PropTypes.func.isRequired,
  onItemStatusToggle: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ItemsList;
