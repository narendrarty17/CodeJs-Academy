import React from 'react';

const BlogCardHorizontal = () => {
    return (
        <div className="max-w-lg flex bg-gray-700">
            {/* Left Part - Image */}
            <div className="flex-shrink-0 w-36">
                <img
                    className="object-cover w-36 h-40 rounded-md"
                    src="/images/blogs/blog/blog_01/blogIcon.png"
                    alt="Blog"
                />
            </div>

            {/* Right Part - Category and Title */}
            <div className="flex flex-col justify-center gap-2 px-4">
                {/* Category */}
                <p className="text-sm text-gray-400">Programming | Business</p>

                {/* Blog Title */}
                <h2 className="text-lg font-semibold">Use of VR to view 3D websites</h2>
            </div>
        </div>
    );
};

export default BlogCardHorizontal;
