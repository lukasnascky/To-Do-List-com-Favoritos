import type { Task } from "./Task"

export interface FavoritesContextType {
  favorites: Task[]
  addToFavorites: (item: Task) => void
  removeFromFavorites: (id: number) => void
  isFavorite: (id: number) => boolean
}