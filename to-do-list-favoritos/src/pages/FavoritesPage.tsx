import type React from "react"
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useFavorites } from "../contexts/FavoritesContext"


const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites()

  return (
    <Container>
        <div>
            <Typography variant="h4" gutterBottom>
                Favoritos
            </Typography>
        </div>
        <div>
            favorites.map(item)
        </div>
    </Container>
  )
}

export default FavoritesPage