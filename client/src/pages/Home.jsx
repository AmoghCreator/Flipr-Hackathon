import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

const Home = () => {
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
      </Box>
    </div>
  );
};

export default Home;
