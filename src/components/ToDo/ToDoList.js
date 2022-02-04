import React, { useContext } from "react";
import TaskContext from "../../tasks/task-context";
import ListItem from "./ListItem/ListItem";
import { FaFilter } from "react-icons/fa";

import styles from "./ToDo.module.scss";

const FILTER_TASKS = {
  All: () => {},
  Complete: (task) => task.completed,
  Pending: (task) => !task.completed,
};

const ToDoList = (props) => {
  const taskCtx = useContext(TaskContext);
  const tasks = taskCtx.tasks;
  const filter = "Complete";

  const renderedTasks = tasks
    // .filter((task) => task.completed)
    .map((task) => (
      <ListItem
        key={task.id}
        id={task.id}
        name={task.name}
        onNotice={props.onNotice}
        completed={task.completed}
      />
    ));
  return (
    <>
      <div className={styles.todo}>
        <h4 className={styles.todo__text}>{tasks.length} tasks remaining</h4>

        <div>
          <FaFilter /> <span>Filter</span>
        </div>

        <div>
          <ul className={styles.todo__list}>{renderedTasks}</ul>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
