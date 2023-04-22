import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { Box } from "@mui/material";
import Videocontent from "../components/Videocontent";

const Video = () => {
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
        <Videocontent />
      </Box>
    </div>
  );
};

export default Video;
