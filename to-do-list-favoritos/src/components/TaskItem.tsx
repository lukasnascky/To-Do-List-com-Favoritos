import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@mui/material';
import type { Task } from './types/Task';


interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onToggleFav: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onToggleFav }) => {
  return (
    <ListItem>
      <Checkbox checked={task.isDone} onChange={() => onToggle(task.id)} />
      <ListItemText
        primary={task.text}
        style={{
          textDecoration: task.isDone ? 'line-through' : 'none',
          color: task.isDone ? 'gray' : 'inherit'
        }}
      />
      <Checkbox checked={task.isFavorite} onChange={() => onToggleFav(task.id)}/>
    </ListItem>
  );
};

export default TaskItem;