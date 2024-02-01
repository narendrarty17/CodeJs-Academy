// BlogHeader.js

import React from 'react';

const BlogHeader = () => {
    return (
        <div className="bg-gray-800 px-5 py-10 md:p-16">
            <div className="container mx-auto">
                <div className="flex flex-col flex-wrap md:flex-row gap-5 md:gap-10 lg:gap-40 items-center">
                    <div className="text-white flex flex-wrap gap-3 items-center">
                        <div className="flex items-center">
                            <div className="bg-pink-500 rounded-full h-12 w-12 flex items-center justify-center">
                                <h1 className="text-3xl">Fut</h1>
                            </div>
                            <h1 className="text-3xl">ure</h1>
                        </div>
                        <h1 className="text-3xl">focused technologies</h1>
                    </div>
                    <div className="text-white text-lg lg:w-64">
                        <p>Equip yourself with technologies industry demands</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
