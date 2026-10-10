import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="https://illustrations.popsy.co/gray/404.svg"
          alt="Page Not Found"
          sx={{
            width: '100%',
            maxWidth: 350,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            color: 'primary.main',
          }}
        >
          404
        </Typography>

        <Typography variant="h4" fontWeight={600}>
          Page Not Found
        </Typography>

        <Typography color="text.secondary">
          Sorry, the page you are looking for does not exist.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
}