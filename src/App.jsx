import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import TodoInput from "./Components/TodoInput";
import ToDoList from "./Components/TodoList";

function App() {
/*   const todos = [
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries', complete: false },
    { input: 'Take the dog out', complete: false },
    { input: 'Wash the car', complete: true }
  ] */

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: false }
  ]);

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
    </>
  )
};

export default App;
