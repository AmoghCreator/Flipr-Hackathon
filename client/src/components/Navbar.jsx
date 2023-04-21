import React from "react";
import {
  Box,
  alpha,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const drawerWidth = 240;

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            maxWidth: 800,
            ml: 1,
            mr: 5,
            borderRadius: 25,
            background: alpha("#ffffff", 0.1),
            position: "relative",
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            sx={{ position: "absolute", left: 1 }}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search…"
            sx={{
              flexGrow: 1,
              width: "100%",
              paddingLeft: "40px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        <Button
          color="inherit"
          sx={{ textDecoration: "underline", textTransform: "none" }}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          sx={{ ml: 1, borderColor: "black", textTransform: "none" }}
        >
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
