export interface TaskItemType {
  id: string;
  description: string;
  createdAt: Date;
  completed: boolean;
}

export interface TaskItemsType extends Array<TaskItemType> {}
