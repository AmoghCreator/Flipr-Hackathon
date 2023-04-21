import React from "react";
import {
  Box,
  Drawer,
  List,
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

const drawerWidth = 240;

const Sidebar = () => {
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
    </Drawer>
  );
};
export default Sidebar;
