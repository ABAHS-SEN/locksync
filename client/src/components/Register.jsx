import React, { useState, useEffect, useRef } from 'react';
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

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 4;
        this.speedX = Math.random() * 3 - 1;
        this.speedY = Math.random() * 3 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    let particleArray = [];
    const numberOfParticles = 100;

    const init = () => {
      particleArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particleArray.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleParticles = () => {
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        
        for (let j = i; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance/1000})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }

        if (particleArray[i].size <= 0.2) {
          particleArray.splice(i, 1);
          i--;
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          particleArray.push(new Particle(x, y));
        }
      }
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <Container maxWidth="sm" className="relative z-10">
        <Box mt={5} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-lg">
          <Typography variant="h4" align="center" className="text-white mb-4">Register</Typography>
          <form onSubmit={onSubmit}>
            <TextField
              label="Username"
              name="username"
              value={username}
              onChange={onChange}
              fullWidth
              margin="normal"
              required
              InputProps={{
                className: "text-white",
              }}
              InputLabelProps={{
                className: "text-white",
              }}
            />
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={onChange}
              fullWidth
              margin="normal"
              required
              InputProps={{
                className: "text-white",
              }}
              InputLabelProps={{
                className: "text-white",
              }}
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
              InputProps={{
                className: "text-white",
              }}
              InputLabelProps={{
                className: "text-white",
              }}
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
              InputProps={{
                className: "text-white",
              }}
              InputLabelProps={{
                className: "text-white",
              }}
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
              InputProps={{
                className: "text-white",
              }}
              InputLabelProps={{
                className: "text-white",
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Register;