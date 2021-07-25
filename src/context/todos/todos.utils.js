export const createTodo = (todos, todoText) => {
  const arrayLength = todos.length;

  return [...todos, { text: todoText, id: arrayLength + 1 }];
};

export const removeTodo = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};
