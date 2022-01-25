import React, { Component } from "react";
import Input from "./Input";
import Tasks from "./Tasks";
class Todo extends Component {
  state = {
    id: 0,
    taskList: [],
  };

  handleSubmit = (event, value) => {
    console.log("called");
    // prevent page from reloading
    event.preventDefault();
    let { id, taskList } = this.state;
    taskList.push({ id, value });
    id++;
    this.setState({ taskList: taskList, id: id });
    console.log(this.state.taskList);
  };

  render() {
    return (
      <div style={{ margin: "20px 20% 0 20%" }}>
        <h1>The Todo App</h1> <br />
        <Input onSubmit={this.handleSubmit} />
        <Tasks taskList={this.state.taskList} />
      </div>
    );
  }
}

export default Todo;
