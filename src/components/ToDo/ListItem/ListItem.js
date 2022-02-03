import React from "react";
import Button from "../../Button/Button";

import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./ListItem.module.scss";

const ListItem = (props) => {
  return (
    <li className={styles.item}>
      <div className={styles.item__inputs}>
        <input type="checkbox" />
        <div className={styles["item__inputs--name"]}>{props.name}</div>
      </div>

      <div className={styles.item__buttons}>
        <Button name={<FaEdit />} />
        <Button name={<FaTrash />} />
      </div>
    </li>
  );
};

export default ListItem;
