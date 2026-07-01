export interface TaskItem {
  id: string;
  description: string;
  createdAt: Date;
}

export interface TaskItems extends Array<TaskItem> {}
