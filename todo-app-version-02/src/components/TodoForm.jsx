import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";
import PrioritySelect from "./PrioritySelect";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(10);
  const { addNewTodo } = useContext(TodoContext);
  const taskHandler = (event) => {
    setText(event.target.value);
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
      <div className="flex flex-col space-y-4 p-8">
        <label>Today's Task:</label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Enter your task"
          value={text}
          onChange={taskHandler}
        />
        <PrioritySelect
          onSelectPriority={(id) => {
            setPriority(id);
          }}
        />
      </div>
    </form>
  );
};
export default TodoForm;
