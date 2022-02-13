import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MovieCreation, Search, Tv, Whatshot } from "@mui/icons-material";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

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
        value="trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Movies"
        value="Movies"
        icon={<MovieCreation />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="TV-Series"
        value="TV-Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Search"
        value="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
