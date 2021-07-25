import React, { useState } from "react";
import { addTodo } from "../context/todos/todos.actions";
import { useTodos } from "../context/todos/todos.provider";

const Form = () => {
  const [todoText, setTodoText] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText) {
      return;
    }

    dispatch(addTodo(todoText));
    setTodoText("");
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Todo: </label>
        <input type="text" onChange={handleChange} />
      </div>
    </form>
  );
};

export default Form;
