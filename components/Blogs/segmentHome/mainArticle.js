import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BlogImgsBaseDir } from '@/components/Blogs/basePath';

function limitLetters(text, maxLength) {
    if (text.length <= maxLength) {
        return text; // Return the original text if it's already within the limit
    } else {
        return text.substring(0, maxLength) + '...'; // Return the truncated text with ellipsis
    }
}

export const SegmentMainArticle = ({ type, id }) => {
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
    }, [type]);
    return (
        <>
            {blogData && (
                <Link href={url}>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-start items-center px-6 md:px-20'>
                        <div className='max-w-lg'>
                            <img
                                className="w-full h-64 object-cover"
                                src={`${BlogImgsBaseDir}/sections/${type}/${id}/${blogData.iconImage}`}
                            />
                        </div>
                        <div className='flex flex-col gap-2 max-w-md md:w-2/3'>
                            <h3 className="text-2xl pb-2">{blogData.title}</h3>
                            <p className="text-gray-300 pb-4">
                                {limitLetters(blogData.description, 250)}
                            </p>
                            <button className="text-lg bg-blue-500 text-white py-3 px-3 w-36 rounded-full">
                                Read me
                            </button>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
};

export default SegmentMainArticle;
