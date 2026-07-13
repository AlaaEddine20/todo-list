import { useState } from "react";
import { TaskItemType } from "../../types/TaskItemType";
import { Checkbox } from "@/components/ui/checkbox";
import { getStorageItem, setStorageItem } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface TaskItemProps {
  todo: TaskItemType;
}

const TaskItem = ({ todo }: TaskItemProps) => {
  const [completed, setCompleted] = useState<boolean>(todo.completed);

  const handleCheckboxChange = () => {
    setCompleted((prevCompleted) => !prevCompleted);
    setStorageItem("todos", [
      ...getStorageItem("todos").filter((t: TaskItemType) => t.id !== todo.id),
      { ...todo, completed: !completed },
    ]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedDescription = e.target.value;
    setStorageItem("todos", [
      ...getStorageItem("todos").filter((t: TaskItemType) => t.id !== todo.id),
      { ...todo, description: updatedDescription, completed },
    ]);
  };

  return (
    <div className="w-full flex justify-between p-4 border border-[#0a9396] rounded-[10px] text-white text-base">
      <Input
        value={todo.description}
        onChange={handleInputChange}
        className="bg-transparent border-none focus:ring-0"
      />
      <Checkbox
        checked={completed}
        onCheckedChange={handleCheckboxChange}
        className="ml-4"
      />
    </div>
  );
};

export default TaskItem;
