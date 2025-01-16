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

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  };

  function handleEditTodo() {

  };

  function handleDeleteTodo() {

  };

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <ToDoList todos={todos} />
      <TodoInput />
    </>
  )
}

export default App
