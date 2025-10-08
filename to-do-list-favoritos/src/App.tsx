import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import BottomNav from "./components/BottomNav";
import Header from './components/Header';
import { FavoritesProvider } from "./contexts/FavoritesContext";

const App: React.FC = () => {
  return (
    <Router>
      <FavoritesProvider> 
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Routes>

        <BottomNav />
      </FavoritesProvider>
    </Router>
  );
};

export default App;