import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogImgsBaseDir, baseUrl } from '@/components/Blogs/basePath';

const BlogHorizontalSmall = ({ id, type }) => {
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
                    <div className="max-w-md flex">
                        {/* Left Part - Image */}
                        <div className="flex-shrink-0">
                            <img
                                className="object-cover w-36 h-24 md:w-[150px] md:h-[100px]"
                                src={`${BlogImgsBaseDir}/sections/${type}/${id}/${blogData.iconImage}`}
                                alt="Blog"
                            />
                        </div>

                        {/* Right Part - Category and Title */}
                        <div className="flex flex-col justify-center gap-2 px-4">
                            {/* Category */}
                            <p className="text-sm text-gray-400">
                                {Array.isArray(blogData.category) ? (
                                    // Code to render all the categories in the array
                                    blogData.category.map((cat, index) => {
                                        return (
                                            <span key={index}>
                                                {`${cat} ${index != blogData.category.length - 1 ? ("| ") : ""}`}
                                            </span>
                                        )
                                    })
                                ) : blogData.category}

                            </p>
                            {/* Blog Title */}
                            <h2 className="text-md">
                                {blogData.title}
                            </h2>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default BlogHorizontalSmall;
