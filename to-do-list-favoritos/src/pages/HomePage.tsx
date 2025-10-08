import React from 'react';
import { Container } from '@mui/material';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { useFavorites } from '../contexts/FavoritesContext';
import type { Task } from '../components/types/Task';

const HomePage: React.FC = () => {
  const { tasks, addTask, toggleFavorite, toggleDone } = useFavorites();

  const handleAdd = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      isDone: false,
      isFavorite: false,
    };
    addTask(newTask);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <TaskInput onAddTask={handleAdd} />
      <TaskList tasks={tasks} onToggleTask={toggleDone} onToggleFavorite={toggleFavorite} />
    </Container>
  );
};

export default HomePage;