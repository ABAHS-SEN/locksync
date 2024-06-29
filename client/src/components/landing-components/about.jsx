// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-between min-h-full px-40 py-16">

      <div className="max-w-[30vw] my-5 flex flex-col gap-8">
        <h2 className="text-5xl mb-4 font-poppins font-bold text-white">About Us</h2>
        <p className="text-lg text-gray-200">
          Locksync was founded with the mission to provide a secure and reliable file syncing and sharing solution. We believe in the power of technology to simplify lives and enhance productivity.
        </p>
      </div>

      <div className="max-w-xl my-5 flex flex-col justify-start gap-8">
        <div>
         <img src="https://www.resilio.com/images/0008_all-files-everwhere.png" alt="ttt" />
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
