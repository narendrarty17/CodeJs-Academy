import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BlogImgsBaseDir, baseUrl } from '@/components/Blogs/basePath';

const VideoCard = ({ id, type }) => {
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
        <div>
            {blogData && (
                <Link href={`${baseUrl}${url}`}>
                    <div className="max-w-lg md:max-w-md flex flex-row gap-5 md:gap-0 md:flex-col mx-auto">
                        {/* Image Section */}
                        <div className="mb-2">
                            <img
                                className="w-full h-32 md:h-40 lg:h-48 object-cover"
                                src={`${BlogImgsBaseDir}/sections/${type}/${id}/${blogData.iconImage}`}
                                alt="Blog Image"
                            />
                        </div>
                        <div className="mt-7 md:mt-0">
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
                            <h3 className="text-lg pb-3">
                                {blogData.title}
                            </h3>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default VideoCard;
