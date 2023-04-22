import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { Box } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const Favourites = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          bgcolor: "primary.dark",
        }}
      >
        <Sidebar />
        <Navbar />
      </Box>
    </div>
  );
};

export default Favourites;
