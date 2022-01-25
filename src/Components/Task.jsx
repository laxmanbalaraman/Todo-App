import React from "react";
const Task = ({ task, onDelete }) => {
  return (
    <div key={task.id} style={{ padding: "5px" }}>
      <span style={{ margin: 20 }}> {task.value}</span>
      <button onClick={() => onDelete(task.id)} className="btn btn-danger">
        <i className="fa fa-times"></i>
      </button>
      <br />
    </div>
  );
};

export default Task;
