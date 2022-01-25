import React, { Component } from "react";
import Input from "./Input";
import Tasks from "./Tasks";
class Todo extends Component {
  state = {
    id: 0,
    taskList: [],
  };

  handleOnClick = () => {
    console.log("button clicked!!");
  };

  render() {
    return (
      <div style={{ margin: "20px 20% 0 20%" }}>
        <h1>The Todo App</h1> <br />
        <Input onClick={this.handleOnClick} />
        <Tasks id={this.state.id} />
      </div>
    );
  }
}

export default Todo;
