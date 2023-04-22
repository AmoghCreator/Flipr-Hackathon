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

const audioData = [
  {
    title: "Audio Podcast 1",
    author: "Author 1",
    thumbnail: "https://via.placeholder.com/300x200",
    audioUrl: "https://www.example.com/audio1.mp3",
  },
  {
    title: "Audio Podcast 2",
    author: "Author 2",
    thumbnail: "https://via.placeholder.com/300x200",
    audioUrl: "https://www.example.com/audio2.mp3",
  },
  // Add more audio data
];

const Audiocontent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ fontWeight: "bold", mb: 2, mt: 6 }}
      >
        Audio Podcasts
      </Typography>
      <Grid container spacing={3}>
        {audioData.map((audio, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={audio.thumbnail}
                alt={audio.title}
                sx={{ height: 200 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  {audio.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {audio.author}
                </Typography>
              </CardContent>
              <IconButton
                color="primary"
                onClick={() => window.open(audio.audioUrl, "_blank")}
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

export default Audiocontent;
