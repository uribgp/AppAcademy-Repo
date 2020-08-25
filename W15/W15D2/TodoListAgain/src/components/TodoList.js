import React from 'react';
import Task from './Task';
import { store } from '../store';
import { deleteTask } from '../actions/taskActions';
// TODO: Import the application's Redux store instance
// TODO: Import the `deleteTask` action creator function

class TodoList extends React.Component {
  componentDidMount() {
    // TODO: Use `store.subscribe` to force an update when the state changes
    // TODO: Name the subscription as `this.unsubscribe`
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // TODO: Check if `this.unsubscribe` is defined
    // TODO: If its defined, invoke `this.unsubscribe`
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  deleteTask = (id) => {
    // TODO: Invoke `deleteTask` based on an `id` input
    //       and dispatch a 'DELETE_TASK' action
    store.dispatch(deleteTask(id));
  }

  render() {
    const tasksState = Object.values(store.getState());
    debugger
    // TODO: Get the tasks stored in state with the `getState` method
    // TODO: Use debugger to view state

    // TODO: If there are no tasks stored in state, return `null`.


    return (
      <ul>
        {tasksState.length > 0 
          ? tasksState.map((task) => <Task key={task.id} deleteTask={this.deleteTask} task={task} />)
          : null}
      </ul>
    );
  }
}

export default TodoList;
