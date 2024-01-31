import React from 'react';
import BlogCardVertical from './BlogCardVertical';

const MainBlogSection = () => {
    return (
        <div className="flex justify-center gap-6 mt-10 px-6 md:px-20">
            {/* Big Blog Card */}
            <div className="flex flex-col gap-4">
                <div className="max-w-lg mx-auto">
                    {/* Image Section */}
                    <div className="mb-2">
                        <img
                            className="w-full h-56 object-cover"
                            src="/images/blogs/blog/blog_01/blogIcon.png"
                            alt="Blog Image"
                        />
                    </div>

                    {/* Category Section */}
                    <div className="mb-1 text-gray-400">
                        Programming
                    </div>

                    {/* Title Section */}
                    <h3 className="text-3xl pb-2">
                        Use of VR to display websites in 3D
                    </h3>
                    <p className="text-gray-300 px-3 pb-4">
                        The modern career requires a development plan to match.
                        Discover how the 360-Degree Career Framework
                        can assist multidimensional growth that delivers a more
                        balanced and fulfilling career.
                    </p>
                </div>
                <button className="text-lg bg-blue-500 text-white py-4 px-6 w-40 rounded-full">
                    Read me
                </button>
            </div>

            {/* Small Blog Cards */}
            <div className="hidden md:flex flex-col gap-6">
                <div className="flex gap-6">
                    {/* Small Blog Card 1 */}
                    <BlogCardVertical />

                    {/* Small Blog Card 2 */}
                    <BlogCardVertical />
                </div>

                <div className="flex gap-6">
                    {/* Small Blog Card 1 */}
                    <BlogCardVertical />

                    {/* Small Blog Card 2 */}
                    <BlogCardVertical />
                </div>
            </div>
        </div>
    );
};

export default MainBlogSection;
