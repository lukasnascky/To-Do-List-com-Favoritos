import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import { useFavorites } from "../contexts/FavoritesContext";

const FavoritesPage: React.FC = () => {
  const { favorites, toggleDone } = useFavorites();

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Favoritos
      </Typography>

      {favorites.length === 0 ? (
        <Typography color="textSecondary" align="center">Nenhuma tarefa favoritada.</Typography>
      ) : (
        <List>
          {favorites.map((task) => (
            <ListItem key={task.id}>
              <Checkbox
                checked={task.isDone}
                onChange={() => toggleDone(task.id)}
              />
              <ListItemText
                primary={task.text}
                style={{
                  textDecoration: task.isDone ? 'line-through' : 'none',
                  color: task.isDone ? 'gray' : 'inherit'
                }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default FavoritesPage;