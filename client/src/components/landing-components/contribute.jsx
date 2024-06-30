// components/Contribute.jsx
import React from 'react';

const Contribute = () => {
  return (
    <div className="flex justify-between min-h-full px-40 py-16">

     
      <div className="max-w-xl my-5 flex flex-col justify-start gap-8">
        <div>
          <img src="https://image.lexica.art/full_webp/0a92c22b-8e31-4e82-9245-1efba8ecb488" alt="Contribute" />
        </div>
      </div>

      <div className="max-w-[30vw] my-5 flex flex-col gap-8">
        <h2 className="text-5xl mb-4 font-poppins font-bold text-white">Contribute</h2>
        <p className="text-lg text-gray-200">
          At Locksync, we welcome contributions from our community. Whether it's code, documentation, or spreading the word, your support helps us grow and improve.
        </p>
      </div>


    </div>
  );
};

export default Contribute;
