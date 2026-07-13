import { useEffect, useState } from "react";
import { TaskItemType } from "../../types/TaskItemType";
import { Checkbox } from "@/components/ui/checkbox";
import { getStorageItem, setStorageItem } from "@/lib/utils";
import { Button } from "../ui/button";
import { Eraser } from "lucide-react";

interface TaskItemProps {
  todo: TaskItemType;
  setTodos: React.Dispatch<React.SetStateAction<TaskItemType[]>>;
}

const TaskItem = ({ todo, setTodos }: TaskItemProps) => {
  const todosStorage = getStorageItem("todos") || [];

  const handleCheckboxChange = () => {
    setTodos([
      ...todosStorage.filter((t: TaskItemType) => t.id !== todo.id),
      { ...todo, completed: !todo.completed },
    ]);
  };

  const handleDeleteTodo = () => {
    setTodos(todosStorage.filter((t: TaskItemType) => t.id !== todo.id));
  };

  return (
    <div className="w-full flex justify-between p-4 border border-[#0a9396] rounded-[10px] text-white text-base">
      <p className="bg-transparent border-none focus:ring-0">
        {todo.description}
      </p>
      <div className="flex items-center gap-4">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleCheckboxChange}
          className="ml-4"
        />
        <Button
          onClick={handleDeleteTodo}
          className="bg-red-500 hover:bg-red-600 w-[14px] h-[14px]"
        >
          <Eraser />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
