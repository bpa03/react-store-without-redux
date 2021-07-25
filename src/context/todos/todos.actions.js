import { todosTypes } from "./todos.types";

export const addTodo = (todoText) => {
  return {
    type: todosTypes.ADD_TODO,
    payload: todoText
  };
};

export const deleteTodo = (id) => {
  return {
    type: todosTypes.DELETE_TODO,
    payload: id
  };
};
