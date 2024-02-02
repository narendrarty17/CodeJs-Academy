import React from 'react';
import BlogCardVertical from './subHomeComponents/BlogCardVertical';
import BigBlogCard from './subHomeComponents/BigBlogCard';

const MainBlogSection = () => {
    return (
        <div className="flex justify-center gap-6 px-6 md:px-20">
            {/* Big Blog Card */}
            <BigBlogCard />

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
