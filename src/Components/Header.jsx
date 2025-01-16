import React from 'react';

function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  const isTasksPlural = todos.length != 1;

  const taskOrTasks = isTasksPlural ? 'tasks' : 'task';

  return (
    <header>
      <h1>You have {todosLength} open {taskOrTasks}.</h1>
    </header>
  )
}

export default Header;