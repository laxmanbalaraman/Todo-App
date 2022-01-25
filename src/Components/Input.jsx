import React from "react";

const Input = ({ onClick }) => {
  return (
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Add a Task..." />
      <button class="btn btn-primary" type="button" onClick={onClick}>
        Add
      </button>
    </div>
  );
};

export default Input;
