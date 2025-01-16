import React from 'react';
import TodoCard from './TodoCard';

function ToDoList(props) {
  const { todos, selectedTab } = props;
  
  const filterTodoList = selectedTab === 'All' ? 
  todos :
  selectedTab === 'Completed' ?
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