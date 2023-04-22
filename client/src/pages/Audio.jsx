import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { Box } from "@mui/material";
import Audiocontent from "../components/Audiocontent";

const Audio = () => {
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
        <Audiocontent />
      </Box>
    </div>
  );
};

export default Audio;
