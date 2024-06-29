// components/Usage.jsx
import React from 'react';

const Usage = () => {
    return (
        <div className='flex justify-between bg-green-600 text-black min-h-full px-40'>

            <div className='max-w-[30vw] my-5 flex flex-col gap-28'>
                <h1 className="text-5xl mb-4 font-poppins font-bold mt-14 text-black">Experience Unmatched Security and Seamless Syncing with Locksync</h1>

            </div>
            <div className="max-w-xl my-5 flex flex-col justify-start gap-40 text-black ">
                <div>
                <h2 className="text-lg font-bold mb-3 text-white">Why Use Locksync?</h2>
                <p className='text-lg font-bold'>  
                    In today's digital age, data security and accessibility are paramount. Locksync offers a seamless, secure, and efficient way to sync and share your files across multiple devices. With our state-of-the-art encryption, you can be assured that your data is safe from prying eyes. Our platform is designed to be user-friendly, allowing you to easily manage your files with just a few clicks. Whether you're collaborating with colleagues, sharing photos with family, or just looking for a reliable backup solution, Locksync has got you covered. Experience the peace of mind that comes with knowing your data is protected and always accessible whenever and wherever you need it.
                </p>

                </div>
              <div>
                <h2 className="text-lg font-bold mb-3 text-white">How to Use Locksync?</h2>
                <p className='text-lg font-bold'>
                    Using Locksync is simple and straightforward. Just sign up for an account, upload your files, and start sharing them securely with others. Our intuitive interface and robust features make file management effortless and efficient, ensuring you stay organized and in control.
                </p>

              </div>


            </div>
        </div>
    );
};

export default Usage;
