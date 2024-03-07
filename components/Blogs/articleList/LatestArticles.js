import React, { useState, useEffect } from 'react'
import { ArticleListItem } from '../cards/ArticleListItem'

export const LatestArticles = ({ type }) => {
    const [count, setCount] = useState(null);
    const [page, setPage] = useState(1);
    const [maxpg, setMaxpg] = useState(0);
    const [items, setItems] = useState([]);

    const pageUpdateHandler = () => {
        let start = (page - 1) * 5;
        let end = (page === maxpg) ? count : start + 5;

        let updatedItems = []
        for (let i = start; i < end; i++) {
            updatedItems.push(<ArticleListItem id={i} type={type} />);
        }
        setItems(updatedItems)
    }

    const incPage = () => {
        if (page < maxpg) setPage((prevPage) => prevPage + 1);
    }

    const decPage = () => {
        if (page > 1) setPage((prevPage) => prevPage - 1);
    }

    useEffect(() => {
        const fetchJsonData = async () => {
            try {
                // Dynamically import the JSON file based on id
                const jsonModule = await import(`@/blogData/${type}/count.json`);
                // Access the default export (JSON data)
                const data = jsonModule.default;
                setCount(data.count);
                if (data.count % 5 === 0) setMaxpg(data.count / 5)
                else setMaxpg(Math.floor(data.count / 5) + 1)
                pageUpdateHandler();
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchJsonData();
    }, [type, page, maxpg]);

    return (
        <div className='flex justify-center md:w-[75%] text-white'>
            <div className='flex flex-col gap-8 items-start'>
                <h1 className="text-3xl">Latest Articles in <i>Career Advice</i></h1>
                <ul className='flex flex-col gap-5 px-2 md:px-4'>
                    {items}
                </ul>
                <div className='flex gap-2 mx-2'>
                    <button
                        onClick={() => decPage()}
                        className='border px-2'
                    >
                        Previous
                    </button>
                    <span>{page}</span>
                    <button
                        onClick={() => incPage()}
                        className='border px-2'
                    >Next</button>
                </div>
            </div>
        </div>
    )
}
