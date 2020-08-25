export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";


export const createTask = (taskMessage) => ({
    type: CREATE_TASK,
    taskId: new Date().getTime(),
    taskMessage: taskMessage
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId: taskId
});