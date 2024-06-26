import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LockSync
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/share">Share Account</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
