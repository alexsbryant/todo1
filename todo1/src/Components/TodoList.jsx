import React from 'react';
import TodoCard from './TodoCard';

function ToDoList(props) {
  const { todos } = props;
  
  const tab = 'All';
  const filterTodoList = tab === 'All' ? 
  todos :
  tab === 'Completed' ?
    todos.filter(val => val.complete) :
    todos.filter(val => !val.complete)

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex} 
            todoIndex={todoIndex} 
            todo={todo} 
          />
        )
      })}
    </>
  )
}

export default ToDoList;