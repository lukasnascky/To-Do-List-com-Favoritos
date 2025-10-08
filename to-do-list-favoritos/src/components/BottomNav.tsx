import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favoritos" value="/favoritos" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;