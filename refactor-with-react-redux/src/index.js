import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './reducers/index';
import TodosApp from './containers/TodosApp';
import './index.css';

const store = createStore(todosReducer);
let currentTodos;
const updateTodosToLocalStorage = () => {
  const previousTodos = currentTodos;
  currentTodos = JSON.stringify(store.getState().todos);
  if (previousTodos !== currentTodos) {
    localStorage.setItem('todos', currentTodos);
  }
};
store.subscribe(updateTodosToLocalStorage);

ReactDOM.render(
  <Provider store={store}>
    <TodosApp />
  </Provider>,
  document.getElementById('root'));
