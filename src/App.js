import { useState, useCallback } from "react";
import "./styles.css";

import Todos from "components/Todos";
import Form from "components/Form";
import { useTodos } from "./context/todos/todos.provider";

export default function App() {
  const {
    state: { todos }
  } = useTodos();

  return (
    <div>
      <Form />
      <Todos todos={todos} />
    </div>
  );
}
