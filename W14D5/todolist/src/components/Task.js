import React from 'react';

const Task = ({ task: {id, message }, deleteTask }) => {
  const handleClick = e => {
    e.preventDefault();
    deleteTask(id);
  }

  return (
    <li>
      <h1>{message}</h1>
      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
