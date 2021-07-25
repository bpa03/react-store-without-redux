import React from "react";

import Todo from "components/Todo";

const Todos = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo {...todo} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
