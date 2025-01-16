import React, { useState } from 'react';


function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputeValue] = useState('');
  console.log(inputValue);

  return (
    <div className="input-container">
      <input value={inputValue} 
        onChange={(e) => {setInputeValue(e.target.value)}} 
        placeholder="Add task" 
      />
      <button onClick={() => {
        if (!inputValue) { return }
        handleAddTodo(inputValue)
      }}>
        <i className="fa-regular fa-square-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput;