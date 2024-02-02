import React from 'react';
import Link from 'next/link';

const BlogCardVertical = () => {
    return (
        <Link href="/blog?blogId=1">
            <div className="max-w-sm mx-auto">
                {/* Image Section */}
                <div className="mb-2">
                    <img
                        className="w-full h-36 object-cover"
                        src="/images/blogs/blog/blog_01/blogIcon.png"
                        alt="Blog Image"
                    />
                </div>

                {/* Category Section */}
                <div className="mb-1 text-gray-400">
                    Programming
                </div>

                {/* Title Section */}
                <h3 className="text-lg pb-3">
                    Use of VR to display websites in 3D
                </h3>
            </div>
        </Link>
    );
};

export default BlogCardVertical;
