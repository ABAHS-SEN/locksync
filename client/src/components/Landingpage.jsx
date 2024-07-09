// components/LandingPage.jsx
import React from 'react';
import AboutUs from './landing-components/about';
import Contact from './landing-components/contact';
import Usage from './landing-components/usage';
import Copyrights from './landing-components/copyright';
import Contribute from './landing-components/contribute';
import Vediosection from './landing-components/videosection';
import './css/LandingPage.css';
import { useState,useEffect } from 'react';



const LandingPage = () => {
  const [text, setText] = useState('');
  const fullText = 'WELCOME TO LOCKSYNC';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
      
    }, 100); // Adjust speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div>
      <div className="max-w-7xl p-4 mx-auto text-center">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl font-semibold mb-4 font-poppins text-[8vw] uppercase leading-[8.5vw]">{text}</h1>
          <h2 className="text-4xl font-semibold mb-6">The best place to sync and share your Account securely.</h2>
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
            className="h-48 w-48 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_1280.png"
            alt="example"
          />
          <div id="moving-div" className='mt-5 relative'>
            <div className="blur-left"></div>
            <span className="move mb-6 font-poppins text-3xl">
              Locksync is your ultimate file syncing and sharing solution. Secure, fast, and reliable. 
            </span>
            <span className="move mb-6 font-poppins text-3xl">
              Locksync is your ultimate file syncing and sharing solution. Secure, fast, and reliable.
            </span>
            <div className="blur-right"></div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-700'></div>
      <Usage />
      <div className='w-full h-[1px] bg-gray-700'></div>
      <AboutUs />
      <div className='w-full h-[1px] bg-gray-700'></div>
      <Contribute/>
      <div className='w-full h-[1px] bg-gray-700'></div>
    <Vediosection/>
    <div className='w-full h-[1px] bg-gray-700'></div>
      <Contact />
      <div className='w-full h-[1px] bg-gray-700'></div>
      <Copyrights />
    </div>
  );
};

export default LandingPage;
