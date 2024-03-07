import Link from 'next/link';
import React from 'react'

export const SegmentHeader = ({ title }) => {
    return (
        <div className="bg-gray-700 h-36 px-6 md:px-8 lg:px-20 flex flex-col justify-center gap-4">
            <Link
                className='flex gap-2 md:mx-14'
                href="/"
            >
                <h3 className='underline mb-1'>Blog</h3>
                <img
                    className='w-5'
                    src="/images/blogs/common/readMoreArrow.svg"
                />
            </Link>
            <div className="flex gap-4 md:justify-start">
                <span className="bg-green-400 w-10 h-10 rounded-full" />
                <h1 className="text-3xl"><i>{title}</i></h1>
            </div>
        </div>
    )
}

export default SegmentHeader;