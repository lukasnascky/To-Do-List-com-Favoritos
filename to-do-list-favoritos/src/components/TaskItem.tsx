import React from 'react';
import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
      <IconButton onClick={() => onToggleFav(task.id)}>
        {task.isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;