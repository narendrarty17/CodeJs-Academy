import React from 'react';
import BlogCardVertical from '@/components/Blogs/cards/CardVertical';
import BigBlogCard from '@/components/Blogs/cards/BigCard';

const MainBlogSection = () => {
    return (
        <div className="flex justify-center gap-6 px-6 md:px-20">
            {/* Big Blog Card */}
            <BigBlogCard id={1} type="main" />

            {/* Small Blog Cards */}
            <div className="hidden md:flex flex-col gap-6">
                <div className="flex gap-6">
                    {/* Small Blog Card 1 */}
                    <BlogCardVertical id={2} type="main" />

                    {/* Small Blog Card 2 */}
                    <BlogCardVertical id={3} type="main" />
                </div>

                <div className="flex gap-6">
                    {/* Small Blog Card 1 */}
                    <BlogCardVertical id={3} type="main" />

                    {/* Small Blog Card 2 */}
                    <BlogCardVertical id={3} type="main" />
                </div>
            </div>
        </div>
    );
};

export default MainBlogSection;
