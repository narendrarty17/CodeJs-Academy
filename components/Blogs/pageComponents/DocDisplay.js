// Import React
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Section from './docSubComponents/Section';
import AuthorInfoHeader from './docSubComponents/AuthorInfoHeader';
import Sidebar from './Sidebar';
import { IdTypeContext } from './Context';
import { BlogImgsBaseDir } from '@/components/Blogs/basePath';

// Define the DocDisplay component
const DocDisplay = () => {
    const [blogData, setBlogData] = useState(null);
    const router = useRouter();
    const { id, type } = router.query;
    const IdAndType = { id, type };

    useEffect(() => {
        const fetchJsonData = async () => {
            try {
                if (id && type) {
                    // Dynamically import the JSON file based on id
                    const jsonModule = await import(`@/blogData/${type}/${id}.json`);
                    // Access the default export (JSON data)
                    const data = jsonModule.default;
                    setBlogData(data);
                }
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchJsonData();
    }, [id, type]);
    return (
        <IdTypeContext.Provider value={IdAndType}>
            {blogData && (
                <div className='flex flex-col lg:flex-row'>
                    <div className="flex-1 border-r border-gray-800 px-4 py-8">
                        <AuthorInfoHeader id={id} type={type} author={blogData.author} />
                        <div className="font-roboto px-1 md:pl-4 mb-8">
                            {/* Cover Image */}
                            <img
                                className='w-full mb-4 rounded-lg'
                                src={`${BlogImgsBaseDir}/sections/${type}/${id}/${blogData.coverImage}`}
                                alt="cover image"
                            />
                            {/* Main Heading */}
                            <h1 className="text-gray-200 text-3xl font-bold mb-4">
                                {blogData.title}
                            </h1>
                            {/* Render the Body */}
                            {blogData.content.map((section, index) => (
                                <Section
                                    key={index}
                                    section={section}
                                />
                            ))}
                        </div>
                    </div>
                    <Sidebar
                        author={blogData.author}
                    />
                </div>
            )}
        </IdTypeContext.Provider>
    );
};

export default DocDisplay;