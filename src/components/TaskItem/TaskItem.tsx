import React from "react";

interface TaskItemProps {
  // Define any props that TaskItem might need here
}

const TaskItem = (props: TaskItemProps) => {
  return (
    <div className="w-full flex justify-center">
      <h1>Task item</h1>
    </div>
  );
};

export default TaskItem;
