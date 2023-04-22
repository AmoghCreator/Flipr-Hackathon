import React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  Explore as ExploreIcon,
  Audiotrack as AudiotrackIcon,
  Videocam as VideocamIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 64,
          bgcolor: "primary.dark",
          px: 3,
        }}
      >
        <Typography variant="h6" color="white">
          Logo
        </Typography>
      </Box>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{
            color: "white",
            bgcolor: "primary.main",
            borderRadius: 1,
            mb: 1,
            "&.Mui-selected": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/Explore"
          sx={{
            color: "white",
            bgcolor: "primary.main",
            borderRadius: 1,
            mb: 1,
            "&.Mui-selected": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/Audio"
          sx={{
            color: "white",
            bgcolor: "primary.main",
            borderRadius: 1,
            mb: 1,
            "&.Mui-selected": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <AudiotrackIcon />
          </ListItemIcon>
          <ListItemText primary="Audio" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/Video"
          sx={{
            color: "white",
            bgcolor: "primary.main",
            borderRadius: 1,
            mb: 1,
            "&.Mui-selected": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <VideocamIcon />
          </ListItemIcon>
          <ListItemText primary="Video" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/Favourites"
          sx={{
            color: "white",
            bgcolor: "primary.main",
            borderRadius: 1,
            mb: 1,
            "&.Mui-selected": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favourites" />
        </ListItem>
        {/* ... Repeat for other items: Favourites, Explore, Audio, Video */}
      </List>
      {user && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Avatar src={user.photoURL} sx={{ width: 56, height: 56 }} />
          <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
            {user.displayName}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            sx={{ mt: 1, borderColor: "text.primary" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      )}
    </Drawer>
  );
};
export default Sidebar;
