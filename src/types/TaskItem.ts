export interface TaskItem {
  id: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: Date;
  updatedAt: Date | null;
  completedAt: Date | null;
  description: string;
  when?: {
    start: Date;
    end: Date;
    dayOfWeek: number;
  };
}

export interface TaskItems extends Array<TaskItem> {}
