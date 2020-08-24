// ./src/AppWithContext.js

import React from 'react';
import TodoContext from './contexts/TodoContext';
import App from './App';

class AppWithContext extends React.Component {
  constructor() {
    super();
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    this.state = {
        tasks: (storedTasks) ? storedTasks : {} ,
        createTask: this.createTask,
        deleteTask: this.deleteTask
    }
  }

  createTask = task => {
    const nextTaskDate = new Date();
    const nextTaskTime = nextTaskDate.getTime();
    const newTask = {
        [nextTaskTime]: {
          id: nextTaskTime,
          message: task,
        },
      };

      this.setState(
        (state, props) => {
          return {tasks: { ...state.tasks, ...newTask }}
        }, () => this.updateLocalStorageTasks()
      )
    }
//   AAO SUGGESTS THIS CODE TO NOT HAVE A RETURN
//   this.setState((state, props) => ({
//     tasks: { ...state.tasks, ...newTask },
//   }), () => this.updateLocalStorageTasks());

  deleteTask = id => {
    this.setState((state, props) => {
        const tasksWithDeletion = { ...state.tasks };
        delete tasksWithDeletion[id];
        return {
          tasks: tasksWithDeletion,
        };
      }, () => this.updateLocalStorageTasks()
    );
  }



  updateLocalStorageTasks = () => {
    console.log(this.state.tasks);
    const jsonTasks = JSON.stringify(this.state.tasks);
    localStorage.setItem('tasks', jsonTasks);
  }

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        <App />
      </TodoContext.Provider>
    );
  }
}

export default AppWithContext;
