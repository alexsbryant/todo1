import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import TodoInput from "./Components/TodoInput";
import ToDoList from "./Components/TodoList";
import Reset from "./Components/Reset";

function App() {

  const defaultTodo = [{ input: 'Hello! Add your first todo!', complete: false }]

  const [todos, setTodos] = useState(defaultTodo);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList);
  };

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo1-app', JSON.stringify({ todos: 
    currentTodos }))
  };

  function handleReset() {
    const userConfirmed = window.confirm("Are you sure you want to reset?");
    if (userConfirmed) {    setTodos(defaultTodo)
    alert("Todos have been reset!");
    } else {
      alert("Reset cancelled.");
    }
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo1-app')) { return };
/*     console.log('here'); */
    let db = JSON.parse(localStorage.getItem('todo1-app'));
    setTodos(db.todos);
    }, []);

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
        handleCompleteTodo={handleCompleteTodo} 
        selectedTab={selectedTab} 
        todos={todos} 
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Reset handleReset={handleReset} />
    </>
  )
};

export default App;
