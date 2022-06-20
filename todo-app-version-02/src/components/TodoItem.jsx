import React from "react";
import { useContext, useState } from "react";
import { FiTrash2, FiSmile, FiFrown } from "react-icons/fi";
import TodoContext from "../context/TodoContext";
import "../index.css";
const TodoItem = ({ id, text, priority }) => {
  const { deleteTodo } = useContext(TodoContext);
  const [feeling, setFeeling] = useState(false);
  const sadHandler = () => {
    setFeeling(false);
  };
  const happyHandler = () => {
    setFeeling(true);
  };
  return (
    <div className="card w-96 bg-secondary pr-8 mt-6 ">
      <div className="item card-body items-center text-center ">
        <button onClick={sadHandler}>
          <FiSmile color="black" />
        </button>
        <button onClick={happyHandler}>
          <FiFrown color="purple" />
        </button>
        <label style={{ color: feeling ? "purple" : "black" }}>{text}</label>
        <label className="btn btn-circle bg-primary">{priority}</label>
        <button onClick={() => deleteTodo(id)}>
          <FiTrash2 className="bg-secondary" color="red" />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
