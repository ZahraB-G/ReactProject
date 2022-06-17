import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";
const TodoForm = () => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(10);
  const { addNewTodo } = useContext(TodoContext);
  const taskHandler = (event) => {
    setText(event.target.value);
  };
  const priorityHandler = (event) => {
    setPriority(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = { text, priority };
    addNewTodo(newTask);
    setPriority(10);
    setText("");
  };
  return (
    <form
      className="card bg-secondary w-96 pr-8 mt-6 "
      onSubmit={submitHandler}
    >
      <label>Today's Task:</label>

      <input
        type="text"
        placeholder="Enter your task"
        value={text}
        onChange={taskHandler}
      />
      <input
        type="text"
        placeholder="Enter Priority"
        value={priority}
        onChange={priorityHandler}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default TodoForm;
