import React, { useContext } from "react";
import TaskContext from "../../tasks/task-context";
import ListItem from "./ListItem/ListItem";

import styles from "./ToDo.module.scss";

const ToDoList = (props) => {
  const taskCtx = useContext(TaskContext);
  const tasks = taskCtx.tasks;
  return (
    <>
      <div className={styles.todo}>
        <h4 className={styles.todo__text}>{tasks.length} tasks remaining</h4>

        <div>
          <ul className={styles.todo__list}>
            {tasks.map((task) => (
              <ListItem key={task.id} id={task.id} name={task.name} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
