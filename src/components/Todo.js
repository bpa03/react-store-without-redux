import React from "react";

import { useTodos } from "context/todos/todos.provider";
import { deleteTodo } from "context/todos/todos.actions";

const Todo = ({ text, id }) => {
  const { dispatch } = useTodos();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <h2> {text} </h2>
      <div>
        <button onClick={handleDelete}> Delete </button>
      </div>
    </li>
  );
};

export default Todo;
