import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: 12,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={1}>
          <Pagination
            count={numberOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            color="primary"
            hideNextButton
            hidePrevButton
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
