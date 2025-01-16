import React from 'react';

function TodoInput() {
  return (
    <div className="input-container">
      <input placeholder="Add task" />
      <button>
      <i className="fa-regular fa-square-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput;