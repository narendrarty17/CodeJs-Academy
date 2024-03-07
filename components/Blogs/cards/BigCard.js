import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { BlogImgsBaseDir, baseUrl } from '@/components/Blogs/basePath';

function limitLetters(text, maxLength) {
    if (text.length <= maxLength) {
        return text; // Return the original text if it's already within the limit
    } else {
        return text.substring(0, maxLength) + '...'; // Return the truncated text with ellipsis
    }
}

const BigBlogCard = ({ id, type }) => {
    const [blogData, setBlogData] = useState(null);

    // Constructing the URL for the blog
    const url = `/blog?id=${id}&type=${type}`;

    useEffect(() => {
        const fetchJsonData = async () => {
            try {
                // Dynamically import the JSON file based on id
                const jsonModule = await import(`@/blogData/${type}/${id}.json`);
                // Access the default export (JSON data)
                const data = jsonModule.default;
                setBlogData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchJsonData();
    }, [id, type]);

    return (
        <div className="flex flex-col gap-4">
            {/* Adding a conditional rendering to ensure blogData is available */}
            {blogData && (
                <Link href={`${baseUrl}${url}`}>
                    <div className="max-w-lg mx-auto">
                        {/* Image Section */}
                        <div className="mb-2">
                            {/* Conditional rendering for the image */}
                            <img
                                className="w-full h-56 object-cover"
                                src={`${BlogImgsBaseDir}/sections/${type}/${id}/${blogData.iconImage}`}
                                alt="Blog Image"
                            />
                        </div>

                        {/* Category Section */}
                        <div className="mb-1 text-gray-400">
                            {Array.isArray(blogData.category) ? (
                                // Code to render all the categories in the array
                                blogData.category.map((cat, index) => {
                                    return (
                                        <span>
                                                // code to seperate categories with | symbol
                                            {`${cat} ${index != blogData.category.length - 1 ? ("| ") : ""}`}
                                        </span>
                                    )
                                })
                            ) : blogData.category}
                        </div>

                        {/* Title Section */}
                        <h3 className="text-2xl pb-2">
                            {blogData.title}
                        </h3>
                        <p className="text-gray-300 pb-4">
                            {limitLetters(blogData.description, 250)}
                        </p>
                    </div>
                </Link>
            )}
            <Link href={url}>
                <button className="text-lg bg-blue-500 text-white py-3 px-3 w-32 rounded-full">
                    Read me
                </button>
            </Link>
        </div>
    );
}

export default BigBlogCard;
