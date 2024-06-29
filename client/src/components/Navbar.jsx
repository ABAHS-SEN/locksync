import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-white text-xl font-bold">
            LockSync
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" fill="white">
            <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
          </svg>
        </div>
        <div className="flex gap-4">
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          <Link to="/share" className="text-white hover:text-gray-200">Share Account</Link>
          <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
