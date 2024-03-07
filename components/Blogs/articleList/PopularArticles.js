import React, { useEffect, useState } from 'react'
import HorizontalSmall from '../cards/HorizontalSmall'

export const PopularArticles = ({ type }) => {
    let articleArray = [];
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const fetchJsonData = async () => {
            if (type) {
                try {
                    const jsonModule = await import(`/blogData/${type}/popular.json`);
                    const data = jsonModule.default;
                    setBlogList(data);
                    console.log('Popular blogs list: ', blogList);
                }
                catch (error) {
                    console.error('Error fetching json data: ', error);
                }
            }
        }
    }, [])

    return (
        <div className='flex flex-col gap-8 items-start text-white'>
            <h1 className="text-3xl">Popular Articles</h1>
            <div className='h-[1px] bg-gray-300 mt-[-10px] mb-[5px] w-[80%]' />
            <div className='flex flex-col gap-5'>
                <HorizontalSmall id={0} type={type} />
                <HorizontalSmall id={1} type={type} />
                <HorizontalSmall id={2} type={type} />
                <HorizontalSmall id={3} type={type} />
                <HorizontalSmall id={4} type={type} />
            </div>
        </div>
    )
}
