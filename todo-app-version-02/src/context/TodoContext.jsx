import React, { createContext, useState } from "react";
const TodoContext = createContext();
export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "This is example task 1",
      priority: 10,
    },
    {
      id: 2,
      text: "This is example task 2",
      priority: 5,
    },
    {
      id: 3,
      text: "This is example task 3",
      priority: 7,
    },
  ]);
  const addNewTodo = (item) => {
    setTodo((prevItem) => [item, ...prevItem]);
  };
  const deleteTodo = (id) => {
    window.confirm("Are you sure ?");
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{
        todo,
        addNewTodo,
        deleteTodo,
      }}
    >
      {children};
    </TodoContext.Provider>
  );
};
export default TodoContext;
