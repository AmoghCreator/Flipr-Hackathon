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
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Replace with your preferred sign-in provider
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
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
            sx={{ position: "absolute", left: 1, ml: 1, mb: 1 }}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search…"
            sx={{
              flexGrow: 1,
              width: "90%",
              paddingLeft: "40px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        <Button
          variant="text"
          color="inherit"
          sx={{
            mr: 1,
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          }}
          onClick={handleSignUp}
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
