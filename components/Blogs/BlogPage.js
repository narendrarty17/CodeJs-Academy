// BlogPage.js

import React, { useState, useEffect } from 'react';
import socialMediaIconData from '@/public/data/blogs/socialMediaIcons';
import suggestedReadData from '@/public/data/blogs/suggestedReadData';

import Blog_01 from './blogContent/blog_01_content';

const SuggestedReads = ({ isSmallScreen }) => {
    const limitedSuggestedReads = suggestedReadData.slice(0, isSmallScreen ? 3 : suggestedReadData.length);

    return (
        limitedSuggestedReads.map((read) => (
            <li key={read.id} className="flex items-start mb-4 mr-4 w-[350px] lg:w-auto lg:mb-4 lg:mr-0">
                {/* Suggested Read Image (Left) */}
                <div className="pr-4">
                    <img
                        className="w-[100px] h-[80px] object-cover rounded"
                        src={read.imageSrc}
                        alt="Suggested Read" />
                </div>

                {/* Suggested Read Content (Right) */}
                <div className="w-2/3">
                    {/* Suggested Read Header */}
                    <div className="flex items-center mb-1">
                        {/* Author Image */}
                        <img
                            src={read.authorSrc}
                            alt="Author"
                            className="w-6 h-6 rounded-full mr-2"
                        />

                        {/* Author Name */}
                        <span className="text-[12px]">{read.authorName}</span>
                    </div>

                    {/* Suggested Read Title */}
                    <h2 className="text-[12px] font-bold mb-2">{read.readTitle}</h2>
                </div>
            </li>
        ))
    )
};

const Sidebar = ({ isSmallScreen }) => {
    return (
        <div className="w-full lg:w-1/5 px-4 py-8">
            {/* Search Bar */}
            <div className="mb-6 hidden lg:block">
                {/* Add your search bar component here */}
                <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-3xl" />
            </div>

            {/* Author Details */}
            <div className="mb-6 hidden lg:block">
                {/* Author Info */}
                <div className="flex items-center mb-4">
                    {/* Author Logo */}
                    <img src="/images/blogs/blogpage/authorLogo.png" alt="Author Logo" className="w-10 h-10 rounded-full mr-4" />
                    {/* Author Info */}
                    <div>
                        <h2 className="text-sm font-bold">Vishal Sharma</h2>
                        <p className="text-[12px] text-gray-500">267k followers</p>
                    </div>
                </div>

                {/* Short Paragraph about the Author */}
                <p className='text-[12px] text-gray-400'>
                    Lead UX Designer @ Slack. Loves travelling and lives for backstage action!
                    Love to design user centric products and understanding consumer behaviour
                </p>
            </div>

            {/* Suggested Reads */}
            <div>
                <h2 className="text-lg font-bold mb-4">Suggested Reads</h2>
                {/* Add your suggested reads links or components here */}
                <ul className="flex flex-wrap flex-row lg:flex-col">
                    <SuggestedReads isSmallScreen={isSmallScreen} />
                </ul>
            </div>
        </div>
    );
}

const SocialMediaIcons = () => (
    socialMediaIconData.map((icon) => (
        <a key={icon.id} href="#" className="text-blue-500">
            <img
                className='w-4 h-4'
                src={icon.src}
                alt={icon.alt}
            />
        </a>
    ))
);

const BlogPage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        console.log(isSmallScreen);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen]);

    return (
        <div className='flex flex-col lg:flex-row'>
            <div className="flex-1 border-r border-gray-800 px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    {/* Author Info */}
                    <div className="flex items-center">
                        <img src="/images/blogs/blogpage/authorLogo.png" alt="Author Logo" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h2 className="text-sm font-bold">Vishal Sharma</h2>
                            <p className="text-[12px] text-gray-500">5 July, 2023</p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-4">
                        {/* Add your social media icons and links here */}
                        <SocialMediaIcons />
                    </div>
                </div>

                {/* Blog Content */}
                <div className="mb-8">
                    <Blog_01 />
                </div>
            </div>
            {/* Sidebar (only visible on large screens) */}
            <Sidebar isSmallScreen={isSmallScreen} />
        </div>
    )
};

export default BlogPage;
