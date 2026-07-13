import React, { useEffect, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { TaskItemsType } from "../../types/TaskItemType";

const TasksList = () => {
  const [todos, setTodos] = useState<TaskItemsType>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (!inputText.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      description: inputText,
      createdAt: new Date(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="w-4/5 h-3/5 absolute top-[30%] flex flex-col">
        <div className="w-full flex justify-around">
          <input
            name="task"
            type="text"
            placeholder="Add task here.."
            onChange={handleChange}
            value={inputText}
            className="bg-transparent outline-0 border border-[#0a9396] p-4 h-[50px] rounded-[10px] text-white text-base"
          />
          <button
            onClick={handleAddTodo}
            className="p-[0.7rem] bg-[#0a9396] border-none rounded-[10px]"
          >
            Add
          </button>
        </div>
      </div>
      {todos.length > 0 ? (
        <div className="w-4/5 h-3/5 absolute top-[50%] flex flex-col gap-4 overflow-y-auto">
          {todos
            .map((todo) => <TaskItem key={todo.id} todo={todo} />)
            .reverse()}
        </div>
      ) : null}
    </>
  );
};

export default TasksList;
