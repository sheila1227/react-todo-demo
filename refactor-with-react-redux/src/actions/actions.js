// action types
export const INIT_TODOS = 'INIT_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';
export const TOGGLE_ALL_TODOS_COMPLETE = 'TOGGLE_ALL_TODOS_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const initTodos = todos => ({ type: INIT_TODOS, todos });

export const addTodo = newTodo => ({ type: ADD_TODO, newTodo });

export const deleteTodoItem = id => ({ type: DELETE_TODO, id });

export const updateTodoText = (id, text) => ({ type: UPDATE_TODO_TEXT, id, text });

export const toggleTodoComplete = id => ({ type: TOGGLE_TODO_COMPLETE, id });

export const toggleAllTodosComplete = checkAll => ({ type: TOGGLE_ALL_TODOS_COMPLETE, checkAll });

export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
