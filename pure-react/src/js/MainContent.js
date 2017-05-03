import React, { Component } from 'react';
import CreateItem from './CreateItem';
import ItemsList from './ItemsList';
import ActionBar from './ActionBar';
import './../css/MainContent.css';

class MainContent extends Component {
  static getRandomId() {
    const S4 = function S4() {
      return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
    };
    return `${S4()}-${S4()}-${S4()}-${S4()}}`;
  }

  constructor(props) {
    super(props);
    this.state = {
      todos: null,
      filter: 'All',
    };
    this.createNewTodoItem = this.createNewTodoItem.bind(this);
    this.onItemStatusToggle = this.onItemStatusToggle.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.toggleAllItemsStatus = this.toggleAllItemsStatus.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  componentWillMount() {
    let todos = localStorage.getItem('todos');
    todos = todos ? JSON.parse(todos) : [];
    this.setState({
      todos,
    });
  }

  componentWillUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  onItemStatusToggle(todoItem) {
    const todoItems = this.state.todos.map((item) => {
      if (item.id === todoItem.id) {
        return Object.assign({}, item, {
          completed: !item.completed,
        });
      }
      return item;
    });
    this.setState({
      todos: todoItems,
    });
  }

  createNewTodoItem(newTodoText) {
    const todoItems = this.state.todos;
    todoItems.push({
      id: MainContent.getRandomId(),
      text: newTodoText,
      completed: false,
    });
    this.setState({
      todos: todoItems,
    });
  }

  deleteTodoItem(todoItem) {
    const todoItems = this.state.todos.filter(item => item.id !== todoItem.id);
    this.setState({
      todos: todoItems,
    });
  }

  updateItem(todoItem, updates) {
    const todoItems = this.state.todos.map((item) => {
      if (item.id === todoItem.id) {
        return Object.assign({}, item, updates);
      }
      return item;
    });
    this.setState({
      todos: todoItems,
    });
  }

  applyFilter(item) {
    this.setState({
      filter: item,
    });
  }

  toggleAllItemsStatus(event) {
    const toggleComplete = event.target.checked;
    const todoItems = this.state.todos.map((item) => {
      if (item.completed === toggleComplete) {
        return item;
      }
      return Object.assign({}, item, {
        completed: toggleComplete,
      });
    });

    this.setState({
      todos: todoItems,
    });
  }

  render() {
    let unCompletedCount = 0;
    this.state.todos.forEach((item) => {
      if (!item.completed) {
        unCompletedCount += 1;
      }
    });

    const filter = this.state.filter;
    const filteredTodos = this.state.todos.filter((item) => {
      if (filter === 'Completed') {
        return item.completed;
      } else if (filter === 'Active') {
        return !item.completed;
      }
      return true;
    });


    let allCompleted;
    if (this.state.todos.length === 0) {
      allCompleted = false;
    } else {
      allCompleted = !this.state.todos.some(item => !item.completed);
    }

    return (
      <div className="Main-content">
        <CreateItem
          createNewTodoItem={this.createNewTodoItem}
        />
        <ItemsList
          onItemStatusToggle={this.onItemStatusToggle}
          deleteTodoItem={this.deleteTodoItem}
          updateItem={this.updateItem}
          todos={filteredTodos}
        />
        <ActionBar
          allCompleted={allCompleted}
          filter={this.state.filter}
          filters={['All', 'Active', 'Completed']}
          count={unCompletedCount}
          toggleAllItemsStatus={this.toggleAllItemsStatus}
          applyFilter={this.applyFilter}
        />
      </div>
    );
  }
}

export default MainContent;
