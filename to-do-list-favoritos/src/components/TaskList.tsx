import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import type { Task } from './types/Task';


interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onToggleFavorite }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} onToggleFav={onToggleFavorite}/>
      ))}
    </List>
  );
};

export default TaskList;