import React from "react";

const Input = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={(e) => onSubmit(e, value)}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a Task..."
          onChange={onChange}
          value={value}
        />
        <input className="btn btn-primary" type="submit" value="Add" />
      </div>
    </form>
  );
};

export default Input;
