import React, { useContext, useState } from "react";
import TaskContext from "../../tasks/task-context";
import Button from "../Button/Button";

import styles from "./Form.module.scss";

const Form = (props) => {
  const [newTask, setTask] = useState("");

  const taskCtx = useContext(TaskContext);

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (newTask === "") {
      props.onNotice(`Task cannot be empty `);
      return;
    }

    taskCtx.addTask(newTask);
    setTask("");
  };
  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <label className={styles.form__label}>Add Task</label>
      <input
        className={styles.form__input}
        onChange={taskHandler}
        type="text"
        value={newTask}
      />

      <Button name="Add Task" />
    </form>
  );
};

export default Form;
