import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from "../components/types/Task";

interface FavoritesContextType {
  tasks: Task[];
  favorites: Task[];
  addTask: (task: Task) => void;
  toggleDone: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleDone = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleFavorite = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  const favorites = tasks.filter((t) => t.isFavorite);

  return (
    <FavoritesContext.Provider value={{ tasks, favorites, addTask, toggleFavorite, toggleDone }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};