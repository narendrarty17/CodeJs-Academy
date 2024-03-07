import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { BlogImgsBaseDir, baseUrl } from '@/components/Blogs/basePath';

export const OverlappingCard = ({ id, type }) => {
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
        <>
            {blogData && (
                <Link href={`${baseUrl}${url}`}>
                    <div className="relative inline-block w-[300px] md:w-[320px] 2xl:w-[400px] h-[180px] md:h-[180px] 2xl:h-[225px] mb-14">
                        <img
                            className="w-[300px] md:w-[300px] 2xl:w-[400px] h-[180px] md:h-[180px] 2xl:h-[225px]"
                            src={`${BlogImgsBaseDir}/sections/${type}/${id}/${blogData.iconImage}`}
                        />
                        <div className="absolute right-[-20px] mt-[-100px] ml-[12px] bg-gray-700 p-4 rounded">
                            <div className="flex flex-col gap-1">
                                <div className="text-md text-gray-400">Category</div>
                                <div className="text-lg text-white">Understanding React Js: An Introduction one more line</div>
                                <div className="flex flex-row items-center gap-6 mt-3 text-gray-300">
                                    <h1 className='pb-1'>Read More</h1>
                                    <img
                                        className='w-5'
                                        src="/images/blogs/common/readMoreArrow.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
};

export default OverlappingCard;
