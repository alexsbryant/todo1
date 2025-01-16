import React, { useState } from 'react';


function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="input-container">
      <input value={inputValue} 
        onChange={(e) => {setInputValue(e.target.value)}} 
        placeholder="Add task" 
      />
      <button onClick={() => {
        if (!inputValue) { return }
        handleAddTodo(inputValue)
        setInputValue('')
      }}>
        <i className="fa-regular fa-square-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput;