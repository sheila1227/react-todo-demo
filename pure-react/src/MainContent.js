import React, { Component, PropTypes } from 'react';
import CreateItem from './CreateItem';
import ItemsList from './ItemsList';
import ActionBar from './ActionBar';
import './MainContent.css';

class MainContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: null,
      filter: 'All'
    };
  }

  getRandomId() {
    const S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  createNewTodoItem(newTodoText) {
    const todoItems = this.state.todos;
    todoItems.push({
      id: this.getRandomId(),
      text: newTodoText,
      completed: false
    });
    this.setState({
      todos: todoItems
    });
  }

  deleteTodoItem(todoItem) {
    const todoItems = this.state.todos.filter((item) => {
      return item.id !== todoItem.id;
    });
    this.setState({
      todos: todoItems
    });
  }

  onItemStatusToggle(todoItem) {
    const todoItems = this.state.todos.map((item) => {
      if (item.id === todoItem.id) {
        return Object.assign({}, item, {completed: !item.completed});
      } else {
        return item;
      }
    });
    this.setState({
      todos: todoItems
    });
  }

  updateItem(todoItem, updates) {
    const todoItems = this.state.todos.map((item) => {
      if (item.id === todoItem.id) {
        return Object.assign({}, item, updates);
      } else {
        return item;
      }
    });
    this.setState({
      todos: todoItems
    });
  }

  applyFilter(item) {
    this.setState({
      filter: item
    })
  }

  toggleAllItemsStatus(event) {
    const toggleComplete = event.target.checked;
    const todoItems = this.state.todos.map((item)=>{
      if (item.completed == toggleComplete) {
        return item;
      } else {
        return Object.assign({}, item, {completed: toggleComplete});
      }
    });

    this.setState({
      todos: todoItems
    });
  }

  componentWillMount() {
    let todos = localStorage.getItem('todos');
    todos = !!todos? JSON.parse(todos):[];
    this.setState({
      todos: todos
    });
  }

  componentWillUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    let unCompletedCount = 0;
    this.state.todos.forEach((item) => {
      if(!item.completed){
        unCompletedCount++;
      }
    });

    const filter = this.state.filter;
    const filteredTodos = this.state.todos.filter((item)=>{
      if(filter === 'Completed') {
        return item.completed;
      } else if (filter === 'Active') {
        return !item.completed;
      }
      return true;
    });


    let allCompleted;
    if(this.state.todos.length === 0) {
      allCompleted = false;
    } else {
      allCompleted = !this.state.todos.some((item) => {
        return !item.completed;
      });
    }

    return (
      <div className='Main-content'>
        <CreateItem createNewTodoItem={this.createNewTodoItem.bind(this)}></CreateItem>
        <ItemsList
          onItemStatusToggle={this.onItemStatusToggle.bind(this)}
          deleteTodoItem={this.deleteTodoItem.bind(this)}
          updateItem={this.updateItem.bind(this)}
          todos={filteredTodos}>
        </ItemsList>
        <ActionBar allCompleted={allCompleted} toggleAllItemsStatus={this.toggleAllItemsStatus.bind(this)} filter={this.state.filter} applyFilter={this.applyFilter.bind(this)} filters={['All','Active','Completed']} count={unCompletedCount}></ActionBar>
      </div>
    );
  }
}

export default MainContent;
