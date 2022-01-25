import React from "react";
const Tasks = ({ taskList }) => {
  return taskList.map((task) => <h1>{task.value}</h1>);
};

export default Tasks;
