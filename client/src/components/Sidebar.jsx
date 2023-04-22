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
  const menuItems = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Favourites", icon: <FavoriteIcon /> },
    { name: "Explore", icon: <ExploreIcon /> },
    { name: "Audio", icon: <AudiotrackIcon /> },
    { name: "Video", icon: <VideocamIcon /> },
  ];

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
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              color: "white",
              bgcolor: "primary.main",
              borderRadius: 1,
              mb: 1,
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
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
