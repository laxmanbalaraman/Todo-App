import React, { Component } from "react";
import Input from "./Input";
import Tasks from "./Tasks";
class Todo extends Component {
  state = {
    id: 0,
    taskList: [],
    value: " ",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = (event, inputVal) => {
    // prevent page from reloading
    event.preventDefault();
    let { id, taskList, value } = this.state;
    taskList.push({ id, value: inputVal });
    id++;
    value = "";
    this.setState({ taskList: taskList, id: id, value });
  };

  handleDelete = (id) => {
    let taskList = [...this.state.taskList];
    taskList = taskList.filter((task) => task.id != id);
    this.setState({ taskList });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ margin: "20px 20% 0 20%" }}>
        <h1>The Todo App</h1> <br />
        <Input
          value={value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Tasks taskList={this.state.taskList} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Todo;
