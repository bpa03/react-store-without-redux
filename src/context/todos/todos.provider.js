import React, { createContext, useContext, useEffect, useReducer } from "react";
import todosReducer from "./todos.reducer";

const TodosContext = createContext();
const INITIAL_STATE = {
  todos: []
};

// const getItemFromLocalStorage = (key) => {
//   const item = localStorage.getItem(key);

//   if (!item) return null;

//   return JSON.parse(item);
// };

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE);
  const value = { state, dispatch };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(state));
  // }, [state]);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useCount must be used within a TodosProvider");
  }

  return context;
};
