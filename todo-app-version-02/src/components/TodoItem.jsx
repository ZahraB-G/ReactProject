import React from "react";
import { useContext } from "react";
import { FiTrash2, FiSmile } from "react-icons/fi";
import TodoContext from "../context/TodoContext";
const TodoItem = ({ id, text, priority }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <div className="card w-96 bg-secondary pr-8 mt-6">
      <div className="card-body items-center text-center ">
        <FiSmile />
        <label>{text}</label>
        <label>{priority}</label>
        <button onClick={() => deleteTodo(id)}>
          <FiTrash2 className="bg-secondary" color="red" />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
