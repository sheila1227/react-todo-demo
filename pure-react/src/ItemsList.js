import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import './ItemsList.css';

class ItemsList extends Component {
  static propTypes = {
    deleteTodoItem: PropTypes.func.isRequired,
    onItemStatusToggle: PropTypes.func.isRequired,
    updateItem:PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        {this.props.todos.map((item, index) =>
          <TodoItem
            onItemStatusToggle={this.props.onItemStatusToggle}
            deleteTodoItem={this.props.deleteTodoItem}
            updateItem={this.props.updateItem}
            todo={item}
            key={item.id}>
          </TodoItem>)}
      </div>
    );
  }
}

export default ItemsList;
