import React from 'react';
import Link from 'next/link';

const BlogCardHorizontal = () => {
    return (
        <Link href="/blog?blogId=1">
            <div className="max-w-lg flex">
                {/* Left Part - Image */}
                <div className="flex-shrink-0">
                    <img
                        className="object-cover w-36 h-28 md:w-[140px] md:h-[120px] lg:w-64 lg:h-48 xl:w-72 xl:h-54 "
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
        </Link>
    );
};

export default BlogCardHorizontal;
