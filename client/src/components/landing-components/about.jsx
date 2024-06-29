// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-between bg-blue-700 min-h-full px-40 py-16">

      <div className="max-w-[30vw] my-5 flex flex-col gap-8">
        <h2 className="text-5xl mb-4 font-poppins font-bold text-white">About Us</h2>
        <p className="text-lg text-gray-200">
          Locksync was founded with the mission to provide a secure and reliable file syncing and sharing solution. We believe in the power of technology to simplify lives and enhance productivity.
        </p>
      </div>

      <div className="max-w-xl my-5 flex flex-col justify-start gap-8">
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-400">Our Mission</h2>
          <p className="text-lg text-gray-200">
            Our goal is to continuously improve our service to ensure account security and reliability for our users. Thank you for choosing Locksync!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-400">Our Team</h2>
          <p className="text-lg text-gray-200">
            Our dedicated team is committed to providing you with the best experience possible. We are passionate about making account security and data syncing effortless and secure.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
