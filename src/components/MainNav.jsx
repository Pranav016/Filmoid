import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MovieCreation, Search, Tv, Whatshot } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#241a53",
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Movies"
        icon={<MovieCreation />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="TV-Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
