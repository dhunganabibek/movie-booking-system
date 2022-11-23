import { Box, Hidden } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";

function Homepage() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "inline-flex",
          flex: "wrap",
        }}
      >
        {/* {arr.map((item) => ( */}
        <Slider />
        {/* ))} */}
      </Box>
    </>
  );
}

export default Homepage;
