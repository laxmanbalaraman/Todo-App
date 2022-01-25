import React from "react";
import Task from "./Task";
const Tasks = ({ taskList, onDelete }) => {
  return taskList.map((task) => (
    <Task key={task.id} onDelete={onDelete} task={task} />
  ));
};

export default Tasks;
