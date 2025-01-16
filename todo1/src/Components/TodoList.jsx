import React from 'react';
import TodoCard from './TodoCard';

function ToDoList(props) {
  const { todos } = props;
  
  const tab = 'All';
  const filterTodosList = tab === 'All' ? 
  todos :
  tab === 'Completed' ?
  todos.filter(val => val.completed) :
  todos.filter(val => !val.completed)

  return (
    <>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />
        )
      })}
    </>
  )
}

export default ToDoList;