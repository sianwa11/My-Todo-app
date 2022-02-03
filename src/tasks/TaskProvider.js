import React, { useReducer } from "react";

import TaskContext from "./task-context";

// The default task
const defaultState = [];

const taskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const newTask = {
        id: Date.now(),
        name: action.name,
        completed: false,
      };

      const newTasks = [newTask, ...state];
      console.log(newTasks);

      return newTasks;

    default:
      break;
  }
};

const TaskProvider = (props) => {
  const [taskState, dispatchTask] = useReducer(taskReducer, defaultState);

  const addTaskHandler = (name) => {
    dispatchTask({ type: "add", name });
  };

  const editTaskHandler = (id, name) => {
    dispatchTask({ type: "edit", name });
  };

  const deleteTaskHandler = (id) => {
    dispatchTask({ type: "delete", id });
  };

  const taskContext = {
    tasks: taskState,
    addTask: addTaskHandler,
    editTask: editTaskHandler,
    deleteTask: deleteTaskHandler,
  };

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
