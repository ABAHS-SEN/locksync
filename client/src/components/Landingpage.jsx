import React from 'react';
import { Button, Typography, Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import bgImage from '../assets/images/bg-coworking.jpeg';

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        // backgroundImage: `url(${bgImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h2" component="h1" color="white" gutterBottom>
          Welcome to LockSync
        </Typography>
        <Typography variant="h5" component="p" color="white" gutterBottom>
          LockSync helps you securely share and manage your passwords with ease. Join us today to experience seamless password management and sharing.
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '2rem' }}>
          <Grid item>
            <Button variant="contained" color="primary" component={Link} to="/register">
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" component={Link} to="/login">
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
