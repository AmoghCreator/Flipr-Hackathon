import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const videoData = [
  {
    title: "Video 1",
    author: "Author 1",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video1.mp4",
  },
  {
    title: "Video 2",
    author: "Author 2",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video2.mp4",
  },
  // more video data
];

const Videocontent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ fontWeight: "bold", mb: 2, mt: 6 }}
      >
        Video Podcasts
      </Typography>
      <Grid container spacing={3}>
        {videoData.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={video.thumbnail}
                alt={video.title}
                sx={{ height: 200 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.author}
                </Typography>
              </CardContent>
              <IconButton
                color="primary"
                onClick={() => window.open(video.videoUrl, "_blank")}
                sx={{ alignSelf: "center", mb: 1 }}
              >
                <PlayCircleFilledIcon fontSize="large" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videocontent;
