import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Button } from '@/components/ui/card';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particle array
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
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance/100})`;
            ctx.lineWidth = 0.2;
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
          <CardContent>
            <Typography variant="h4" className="text-white mb-2">particles.js</Typography>
            <Typography variant="body1" className="text-white mb-4">A lightweight JavaScript library for creating particles</Typography>
            <Button className="bg-white text-black hover:bg-gray-200 mr-2">GitHub</Button>
            <Button className="bg-white text-black hover:bg-gray-200">Download</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParticlesBackground;