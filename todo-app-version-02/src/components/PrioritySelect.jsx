import React from "react";
const PrioritySelect = ({ onSelectPriority }) => {
  return (
    <div className="space-y-2">
      <div className="flex space-x-5 ">
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(1);
          }}
        >
          1
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(2);
          }}
        >
          2
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(3);
          }}
        >
          3
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(4);
          }}
        >
          4
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(5);
          }}
        >
          5
        </button>
      </div>
      <div className="flex space-x-5">
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(6);
          }}
        >
          6
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(7);
          }}
        >
          7
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(8);
          }}
        >
          8
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(10);
          }}
        >
          9
        </button>
        <button
          className="btn btn-circle bg-primary"
          type="submit"
          onClick={() => {
            onSelectPriority(10);
          }}
        >
          10
        </button>
      </div>
    </div>
  );
};
export default PrioritySelect;
