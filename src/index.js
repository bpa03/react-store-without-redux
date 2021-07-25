import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { TodosProvider } from "./context/todos/todos.provider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TodosProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TodosProvider>,
  rootElement
);
