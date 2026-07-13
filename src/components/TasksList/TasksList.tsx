import React, { useEffect, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { TaskItemsType } from "../../types/TaskItemType";
import { Input } from "@/components/ui/input";
import { getStorageItem, setStorageItem } from "@/lib/utils";

const TasksList = () => {
  const [todos, setTodos] = useState<TaskItemsType>([]);
  const [inputText, setInputText] = useState<string>("");

  const storedTodos = getStorageItem("todos");

  useEffect(() => {
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    setStorageItem("todos", todos);
  }, [todos]);

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

  return (
    <>
      <div className="flex flex-col w-full gap-4 py-12">
        <div className="w-full flex justify-around gap-4">
          <Input
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
        <div className="w-full flex flex-col gap-4">
          {todos
            .map((todo) => (
              <TaskItem
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
              />
            ))
            .reverse()}
        </div>
      ) : null}
    </>
  );
};

export default TasksList;
