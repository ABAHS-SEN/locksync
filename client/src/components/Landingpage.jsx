// components/LandingPage.jsx
import React from 'react';
import AboutUs from './landing-components/about';
import Contact from './landing-components/contact';
import Usage from './landing-components/usage';
import Copyrights from './landing-components/copyright';


const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 text-center">
      <div className="flex flex-col items-center  min-h-screen">
        <h1 className="text-5xl font-bold mb-4">Welcome to Locksync</h1>
        <h2 className="text-2xl font-semibold mb-6">
          The best place to sync and share your files securely.
        </h2>
        <div className="mb-6">
          <a
            href="/register"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Register
          </a>
          <a
            href="/login"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
        <img
          className="h-48 w-48 rounded-full mb-6"
          src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_1280.png"
          alt="example"
        />
        <p className="text-lg mb-6">
          Locksync is your ultimate file syncing and sharing solution. Secure, fast, and reliable.
        </p>


        <Usage />
        <AboutUs />
        <Contact />
        <Copyrights />
      </div>
    </div>


  );
};

export default LandingPage;
