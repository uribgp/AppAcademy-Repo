// TODO: Import `CREATE_TASK` and `DELETE_TASK` string literal constants
import { CREATE_TASK, DELETE_TASK } from '../actions/taskActions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  // TODO: Freeze the state

  let nextState = { ...state };
  // debugger
  switch (action.type) {
    case CREATE_TASK:
      let newTask = {
        id: action.taskId,
        message: action.taskMessage
      }
      nextState[action.taskId] = newTask;
      return nextState;
    case DELETE_TASK:
      let stateWithDeletion = { ...state };
      delete stateWithDeletion[action.taskId];
      return stateWithDeletion;
    default:
      return nextState;
  }
  // TODO: Define switch case for routing 'CREATE_TASK' actions and 'DELETE_TASK' actions
};

export default tasksReducer;
