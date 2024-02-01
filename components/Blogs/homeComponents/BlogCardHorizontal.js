import React from 'react';

const BlogCardHorizontal = () => {
    return (
        <div className="max-w-lg flex">
            {/* Left Part - Image */}
            <div className="flex-shrink-0">
                <img
                    className="object-cover max-w-[250px] xl:max-w-[300px] 2xl:max-w-[350px]"
                    src="/images/blogs/blog/blog_01/blogIcon.png"
                    alt="Blog"
                />
            </div>

            {/* Right Part - Category and Title */}
            <div className="flex flex-col justify-center gap-2 px-4">
                {/* Category */}
                <p className="text-sm text-gray-400">Programming | Business</p>

                {/* Blog Title */}
                <h2 className="text-md lg:text-lg">Use of VR to view 3D websites</h2>
            </div>
        </div>
    );
};

export default BlogCardHorizontal;
