import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const ShareAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    account: ''
  });

  const { email, account } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/users/share`, formData, { withCredentials: true });
      alert('Account shared successfully');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center">Share Account</Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Email of user to share with"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Account to share"
            name="account"
            value={account}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Share Account</Button>
        </form>
      </Box>
    </Container>
  );
};

export default ShareAccount;
