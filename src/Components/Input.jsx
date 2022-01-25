import React from "react";

class Input extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    console.log(value);
  };

  render() {
    const { value } = this.state;
    console.log("props is ", this.props);
    return (
      <form onSubmit={(e) => this.props.onSubmit(e, value)}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a Task..."
            onChange={this.handleChange}
          />
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
    );
  }
}

export default Input;
