import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    age: '',
    email: '',
    password: ''
  });

  const { username, name, age, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/users/register`, formData);
      window.location = '/login';
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center">Register</Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Username"
            name="username"
            value={username}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={age}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={onChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
