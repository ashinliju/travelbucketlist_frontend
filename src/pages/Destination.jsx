import { Box, Button, CardMedia, Chip, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import destination from '../assets/destination.json'
import {
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Link } from 'react-router-dom';



export default function Destination() {
 
  const [search, setSearch] = useState("");

  const filterdestination = destination.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <Typography
  variant="h4"
  sx={{
    fontWeight: 700,
    mb: 1,
  }}
>
  Explore Destinations 🌍
</Typography>

<Typography
  variant="body1"
  color="text.secondary"
  sx={{ mb: 4 }}
>
  Discover amazing places and add them to your travel bucket list.
</Typography>

      <TextField
        label="Search Destination"
        placeholder="Search place by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        sx={{
          mb: 4,
          maxWidth: "600px",
        }}
      />


<div style={{ padding: "30px" }}>
  <Typography
    variant="h4"
    sx={{
      mb: 4,
      fontWeight: 700,
      textAlign: "center",
      color: "#1976D2",
    }}
  >
    Explore Destinations
  </Typography>
<Grid
  container
  spacing={3}
  sx={{
    width: "100%",
    margin: 0,
  }}
>
  {filterdestination.map((place) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={place}
    >
      <Card
        sx={{
          height: "100%",
          minHeight: 520,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: 8,
          },
        }}
      >
        <CardMedia
          component="img"
          image={place.image}
          alt={place.name}
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            {place.name}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#1976D2",
              fontWeight: 600,
              mb: 2,
            }}
          >
            📍 {place.country}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            {place.description}
          </Typography>

          <Typography variant="body2" sx={{ mb: 0.5 }}>
            🌐 <strong>Latitude:</strong> {place.latitude}
          </Typography>

          <Typography variant="body2" sx={{ mb: 0.5 }}>
            🌐 <strong>Longitude:</strong> {place.longitude}
          </Typography>

          <Typography variant="body2">
            🏛️ <strong>Founded:</strong> {place.founded_year}
          </Typography>
        </CardContent>

        <Box
          sx={{
            px: 2,
            pb: 2,
            mt: "auto",
          }}
        >
          <Link
            to="/bucketlist"
            state={{ destination: place.name }}
            style={{
              textDecoration: "none",
              display: "block",
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                py: 1.2,
              }}
            >
              Add to BucketList
            </Button>
          </Link>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>
</div>
    </div>
  )
}
