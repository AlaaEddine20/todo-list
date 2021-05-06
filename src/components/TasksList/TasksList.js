import React, { useState } from "react";
import TaskItem from "./../TaskItem/TaskItem";
import styles from "./styles.module.scss";

const TasksList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTet, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Add task here.."
            onChange={handleChange}
          />
          <button>Add</button>
        </div>
      </div>
      <TaskItem />
    </>
  );
};

export default TasksList;
