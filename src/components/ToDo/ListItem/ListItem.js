import React, { useContext, useState } from "react";

import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./ListItem.module.scss";
import TaskContext from "../../../tasks/task-context";

const ListItem = (props) => {
  const taskCtx = useContext(TaskContext);

  const [editTask, setEditTask] = useState(true);

  const deleteItemHandler = (id) => {
    taskCtx.deleteTask(id);
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__inputs}>
        <input type="checkbox" />
        <div className={styles["item__inputs--name"]}>{props.name}</div>
      </div>

      <div className={styles.item__buttons}>
        <i>
          <FaEdit />
        </i>
        <i onClick={deleteItemHandler.bind(null, props.id)}>
          <FaTrash />
        </i>
      </div>
    </li>
  );
};

export default ListItem;
