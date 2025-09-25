import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from '../components/types/Task';
import type { FavoritesContextType } from "../components/types/Favorites";

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

interface FavoritesProviderProps {
  children: ReactNode
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Task[]>([])

  const addToFavorites = (item: Task): void => {
    setFavorites((prev) => {
      if (!prev.find((fav) => fav.id === item.id)) {
        return [...prev, item]
      }
      return prev
    })
  }

  const removeFromFavorites = (id: number): void => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const isFavorite = (id: number): boolean => {
    return favorites.some((item) => item.id === id)
  }

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}