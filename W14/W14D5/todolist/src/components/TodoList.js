import React from 'react';
import Task from './Task';
import TodoContext from '../contexts/TodoContext'

class TodoList extends React.Component {
  static contextType = TodoContext;

  render() {
    const tasks = Object.values(this.context.tasks);
    debugger
    return (
      <ul>
        {tasks.map(task => <Task key={task.id} task={task} deleteTask={this.context.deleteTask}/>)}
      </ul>
    );
  }
}

export default TodoList;
