import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import type { Task } from '../components/types/Task';


const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      isDone: false,
      isFavorite: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const toggleFavorite = (id:number) => {
    setTasks(tasks.map(task =>
        task.id === id ? { ...task, isFavorite: !task.isFavorite} : task
    ));
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <div className="HomePage">
        <Header/>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleTask={toggleTask} onToggleFavorite={toggleFavorite}/>
      </div>
    </Container>
  );
};

export default HomePage;