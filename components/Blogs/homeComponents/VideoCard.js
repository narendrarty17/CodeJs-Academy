import React from 'react';

const VideoCard = () => {
    return (
        <div className="max-w-lg md:max-w-md flex flex-row gap-5 md:gap-0 md:flex-col mx-auto">
            {/* Image Section */}
            <div className="mb-2">
                <img
                    className="w-full h-32 md:h-40 lg:h-48 object-cover"
                    src="/images/blogs/blog/blog_01/blogIcon.png"
                    alt="Blog Image"
                />
            </div>
            <div className="mt-7 md:mt-0">
                {/* Category Section */}
                <div className="mb-1 text-gray-400">
                    Programming
                </div>

                {/* Title Section */}
                <h3 className="text-xl pb-3">
                    Use of VR to display websites in 3D
                </h3>
            </div>
        </div>
    );
};

export default VideoCard;
