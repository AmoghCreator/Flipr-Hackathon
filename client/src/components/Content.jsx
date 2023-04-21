import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";

const drawerWidth = 0;
const CarouselComponent = () => {
  const images = [
    "https://via.placeholder.com/900x300/ffffff",
    "https://via.placeholder.com/900x300/ffffff",
    "https://via.placeholder.com/900x300/ffffff",
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
      swipeable
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`carousel-${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

const GridComponent = () => {
  const cards = Array(18).fill({
    title: "Song Title",
    description: "Song Description",
    image: "https://via.placeholder.com/150/ffffff",
  });

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={`card-${index}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pb: 1 }}
            >
              <IconButton color="primary">
                <PlayArrowIcon />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const SpotifyContent = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 8,
        ml: drawerWidth,
        p: 3,
        bgcolor: "background.paper",
      }}
    >
      <CarouselComponent />
      <Box sx={{ mt: 4 }}>
        <GridComponent />
      </Box>
    </Box>
  );
};

export default SpotifyContent;
