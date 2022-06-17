import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { todo } = useContext(TodoContext);
  return (
    <div>
      <div>
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            priority={item.priority}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
