import { todosTypes } from "./todos.types";
import { createTodo, removeTodo } from "./todos.utils";

const todosReducer = (state, action) => {
  switch (action.type) {
    case todosTypes.ADD_TODO:
      return { ...state, todos: createTodo(state.todos, action.payload) };
    case todosTypes.DELETE_TODO:
      return { ...state, todos: removeTodo(state.todos, action.payload) };
    default:
      return state;
  }
};

export default todosReducer;
