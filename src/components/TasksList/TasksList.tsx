import React, { useState } from "react";
import { TaskItems } from "../../types/TaskItem";
import TaskItem from "../TaskItem/TaskItem";

const TasksList = () => {
  const [todos, setTodos] = useState<TaskItems>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="w-4/5 h-3/5 absolute top-[30%] flex flex-col">
        <div className="w-full flex justify-around">
          <input
            type="text"
            placeholder="Add task here.."
            onChange={handleChange}
            className="bg-transparent outline-0 border border-[#0a9396] p-4 h-[50px] rounded-[10px] text-white text-base"
          />
          <button className="p-[0.7rem] bg-[#0a9396] border-none rounded-[10px]">
            Add
          </button>
        </div>
      </div>
      <TaskItem />
    </>
  );
};

export default TasksList;
