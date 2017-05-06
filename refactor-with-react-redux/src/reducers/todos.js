import { INIT_TODOS, ADD_TODO, TOGGLE_TODO_COMPLETE, TOGGLE_ALL_TODOS_COMPLETE, DELETE_TODO, UPDATE_TODO_TEXT } from './../actions/actions';

export default (state = [], action) => {
  switch (action.type) {
    case INIT_TODOS:
      return action.todos;
    case ADD_TODO:
      return [...state, action.newTodo];
    case TOGGLE_TODO_COMPLETE:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, { completed: !item.completed });
        }
        return item;
      });
    case TOGGLE_ALL_TODOS_COMPLETE:
      return state.map((item) => {
        if (item.completed === action.checkAll) {
          return item;
        }
        return Object.assign({}, item, {
          completed: action.checkAll,
        });
      });
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    case UPDATE_TODO_TEXT:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, { text: action.text });
        }
        return item;
      });
    default:
      return state;

  }
};
