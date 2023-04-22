import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
const drawerWidth = 0;
const genreData = [
  {
    title: "Motivational",
    podcasts: [
      {
        title: "Motivational Podcast 1",
        author: "Author 1",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Motivational Podcast 2",
        author: "Author 2",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Motivational Podcast 3",
        author: "Author 3",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Motivational Podcast 4",
        author: "Author 4",
        image: "https://via.placeholder.com/200x140",
      },
    ],
  },
  {
    title: "Calming",
    podcasts: [
      {
        title: "Calming Podcast 1",
        author: "Author 1",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Calming Podcast 2",
        author: "Author 2",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Calming Podcast 3",
        author: "Author 3",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Calming Podcast 1",
        author: "Author 3",
        image: "https://via.placeholder.com/200x140",
      },
    ],
  },
  {
    title: "Adventure",
    podcasts: [
      {
        title: "Adventure Podcast 1",
        author: "Author 1",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Adventure Podcast 2",
        author: "Author 2",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Adventure Podcast 3",
        author: "Author 3",
        image: "https://via.placeholder.com/200x140",
      },
      {
        title: "Adventure Podcast 1",
        author: "Author 3",
        image: "https://via.placeholder.com/200x140",
      },
    ],
  },
  //more genres
];
const Explorecontent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, mt: 5 }}>
      {genreData.map((genre, index) => (
        <Box key={index}>
          <Typography
            variant="h4"
            color="text.primary"
            sx={{ fontWeight: "bold", mb: 2, mt: 2 }}
          >
            {genre.title}
          </Typography>
          <Grid container spacing={3}>
            {genre.podcasts.map((podcast, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={podcast.image}
                    alt={podcast.title}
                    sx={{ height: 140 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6">
                      {podcast.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {podcast.author}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton color="primary">
                      <PlayCircleFilledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Explorecontent;
