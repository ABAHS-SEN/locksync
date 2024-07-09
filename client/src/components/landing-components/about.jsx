import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AboutUs = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(image, {
        display: 'block',
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(image, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => gsap.set(image, { display: 'none' }),
      });
    };

    const handleMouseMove = (event) => {
      if (isHovering) {
        const rect = container.getBoundingClientRect();
        gsap.to(image, {
          x: event.clientX - rect.left - 230,
          y: event.clientY - rect.top - 100,
          duration: 0.1,
        });
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  const handleClick = () => {
    window.location.href = 'https://github.com/Abhas-Sen';
  };

  return (
    <div className="flex justify-between min-h-full px-40 py-16" ref={containerRef} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="max-w-[30vw] my-5 flex flex-col gap-8">
        <h2 className="text-5xl mb-4 font-poppins font-bold text-white">About Us</h2>
        <p className="text-lg text-gray-200">
          Locksync was founded with the mission to provide a secure and reliable file syncing and sharing solution. We believe in the power of technology to simplify lives and enhance productivity.
        </p>
      </div>
      <div className="max-w-xl my-5 flex flex-col justify-start gap-8">
        <div>
          <img src="https://www.resilio.com/images/0008_all-files-everwhere.png" alt="Locksync" />
        </div>
      </div>
      <img 
        ref={imageRef}
        src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
        alt="Locksync Usage"
        className="absolute pointer-events-none"
        style={{
          display: 'none',
          opacity: 0,
          scale: 0.8,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default AboutUs;
