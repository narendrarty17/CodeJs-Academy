import React, { useState, useEffect } from 'react'
import { limitLetters } from '../functions/limitLetters';
import { baseUrl } from '../basePath';
import Link from 'next/link';

export const ArticleListItem = ({ id, type }) => {
    const [blogData, setBlogData] = useState(null);

    // Constructing the URL for the blog
    const url = `${baseUrl}/blog?id=${id}&type=${type}`;

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
        <>
            {blogData && (
                <li>
                    <Link className='flex flex-col gap-1' href={url}>
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
                        <h3 className="text-xl pb-2">
                            {limitLetters(blogData.title, 60)}
                        </h3>
                    </Link>
                </li>
            )}
        </>
    )
}
