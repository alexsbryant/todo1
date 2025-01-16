import React, { useState } from "react";
import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import TodoInput from "./Components/TodoInput";
import ToDoList from "./Components/ToDoList";

function App() {
/*   const todos = [
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries', complete: false },
    { input: 'Take the dog out', complete: false },
    { input: 'Wash the car', complete: true }
  ] */

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  };

  function handleCompleteTodo(index) {
    let newTodoList = []

  };

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 
    })
    setTodos(newTodoList)
  };

  return (
    <>
      <Header todos={todos} />
      <Tabs 
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab} 
        todos={todos} 
      />
      <ToDoList 
        handleDeleteTodo={handleDeleteTodo} 
        selectedTab={selectedTab} 
        todos={todos} 
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
