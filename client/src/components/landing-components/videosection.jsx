import React from 'react';

const VideoSection = () => {
    return (
        <div className="flex justify-between min-h-full px-40 py-16">
            <div className="max-w-[30vw] my-5 flex flex-col gap-8">
                <h2 className="text-5xl mb-4 font-poppins font-bold text-white">Watch Our Video</h2>
                <p className="text-lg text-gray-200">
                    Learn more about Locksync and its features by watching our introductory video. See how easy it is to sync and share your Account securely.
                </p>
            </div>
            <div className="max-w-xl my-5 flex flex-col justify-start gap-8">
                <div className="sec-right right-11">
                    <iframe 
                        width="700" 
                        height="400" 
                        src="https://drive.google.com/file/d/1S48JQp763WOkHk7hSOwKO3SDPBxoMDmB/preview" 
                        title="Introductory Video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
