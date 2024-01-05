import React, { useState } from 'react';
import courseBtns from '@/public/data/courseBtns';

const videoData = [
    {
        id: 0,
        title: "Course Structure and Projects",
        type: "video",
        url: "#",
        metaData: "5 min"
    },
    {
        id: 1,
        title: "Read Before You Start!",
        type: "video",
        url: "#",
        metaData: "2 min"
    },
    {
        id: 2,
        title: "Watch Before You Start!",
        type: "video",
        url: "#",
        metaData: "3 min"
    },
    {
        id: 3,
        title: "Setting Up Our Code Editor",
        type: "video",
        url: "#",
        metaData: "4 min"
    }
]

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="flex justify-center aspect-w-16 aspect-h-9 w-full h-auto">
            <iframe
                className="w-full h-[232px] md:h-[480px]"
                src={`https://www.youtube.com/embed/7NMEbvbVck8?si=${embedId}?rel=0`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; gyroscope;"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const Section_01 = () => {
    // State to track the selected button
    const [selectedButton, setSelectedButton] = useState('courseContent');
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const handleTitleClick = () => {
        setShowCheckboxes((prevShowCheckboxes) => !prevShowCheckboxes);
    }

    return (
        <div className="mb-4">
            {/* Youtube video in video player */}
            <YouTubeEmbed embedId="4RMeKVMlID8OiSSP" />
            {/* Buttons for course content, overview, Q&A, and Reviews */}
            <div
                className="flex justify-start mt-8 space-x-4 mx-2 md:mx-48 font-bold"
            >
                {courseBtns.map((link) => (
                    <button
                        className={`text-lg pb-3 ${selectedButton === link.link ? 'border-b-[3px] border-blue-500' : ''}`}
                        onClick={() => setSelectedButton(link.link)}
                    >
                        {link.btnTxt}
                    </button>
                ))}
            </div>
            {/* Horizontal Gray Line */}
            <hr
                className="mx-2 md:mx-48 border-t border-gray-500"
            />
            {/* Course Content section */}
            <div className="mx-3 md:mx-56 mt-10 bg-gray-900">
                {/* Title with Down Arrow */}
                {/* Horizontal Gray Line */}
                <hr
                    className="border-t border-gray-500"
                />
                {/* Section 1 starts here */}
                <div>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={handleTitleClick}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section 1: Welcome, Welcome, Welcome!</h1>
                            <p className="text-sm">0 / 4 | 21min</p>
                        </div>
                        <span className="mx-2">
                            {showCheckboxes ?
                                <img
                                    className="w-[30px] h-auto"
                                    src="/images/courses/course/upArrow.svg"
                                /> :
                                <img
                                    className="w-[22px] h-auto"
                                    src="/images/courses/course/downArrow.svg"
                                />
                            }
                        </span>
                    </section>
                    {/* Checkboxes - Conditionally Rendered */}
                    {showCheckboxes && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {videoData.map((video, index) => (
                                <li
                                    key={index}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">{video.id + 1}. {video.title}</label>
                                    </div>
                                    <div className="flex space-x-2 px-1">
                                        &nbsp;&nbsp;&nbsp;
                                        <img
                                            className="ml-5 w-4"
                                            src="/images/courses/course/video.svg"
                                        />
                                        <p className="text-[12px]">{video.metaData}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr
                        className="border-t border-gray-500"
                    />
                </div>
                {/* Section 1 ends here */}
                {/* Section 2 starts here */}
                <div>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={handleTitleClick}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section 1: Welcome, Welcome, Welcome!</h1>
                            <p className="text-sm">0 / 4 | 21min</p>
                        </div>
                        <span className="mx-2">
                            {showCheckboxes ?
                                <img
                                    className="w-[30px] h-auto"
                                    src="/images/courses/course/upArrow.svg"
                                /> :
                                <img
                                    className="w-[22px] h-auto"
                                    src="/images/courses/course/downArrow.svg"
                                />
                            }
                        </span>
                    </section>
                    {/* Checkboxes - Conditionally Rendered */}
                    {showCheckboxes && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {videoData.map((video, index) => (
                                <li
                                    key={index}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">{video.id + 1}. {video.title}</label>
                                    </div>
                                    <div className="flex space-x-2 px-1">
                                        &nbsp;&nbsp;&nbsp;
                                        <img
                                            className="ml-5 w-4"
                                            src="/images/courses/course/video.svg"
                                        />
                                        <p className="text-[12px]">{video.metaData}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr
                        className="border-t border-gray-500"
                    />
                </div>
                {/* Section 2 ends here */}
                {/* Section 3 starts here */}
                <div>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={handleTitleClick}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section 1: Welcome, Welcome, Welcome!</h1>
                            <p className="text-sm">0 / 4 | 21min</p>
                        </div>
                        <span className="mx-2">
                            {showCheckboxes ?
                                <img
                                    className="w-[30px] h-auto"
                                    src="/images/courses/course/upArrow.svg"
                                /> :
                                <img
                                    className="w-[22px] h-auto"
                                    src="/images/courses/course/downArrow.svg"
                                />
                            }
                        </span>
                    </section>
                    {/* Checkboxes - Conditionally Rendered */}
                    {showCheckboxes && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {videoData.map((video, index) => (
                                <li
                                    key={index}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">{video.id + 1}. {video.title}</label>
                                    </div>
                                    <div className="flex space-x-2 px-1">
                                        &nbsp;&nbsp;&nbsp;
                                        <img
                                            className="ml-5 w-4"
                                            src="/images/courses/course/video.svg"
                                        />
                                        <p className="text-[12px]">{video.metaData}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr
                        className="border-t border-gray-500"
                    />
                </div>
                {/* Sectin 3 ends here */}
                {/* Section 4 starts here */}
                <div>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={handleTitleClick}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section 1: Welcome, Welcome, Welcome!</h1>
                            <p className="text-sm">0 / 4 | 21min</p>
                        </div>
                        <span className="mx-2">
                            {showCheckboxes ?
                                <img
                                    className="w-[30px] h-auto"
                                    src="/images/courses/course/upArrow.svg"
                                /> :
                                <img
                                    className="w-[22px] h-auto"
                                    src="/images/courses/course/downArrow.svg"
                                />
                            }
                        </span>
                    </section>
                    {/* Checkboxes - Conditionally Rendered */}
                    {showCheckboxes && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {videoData.map((video, index) => (
                                <li
                                    key={index}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">{video.id + 1}. {video.title}</label>
                                    </div>
                                    <div className="flex space-x-2 px-1">
                                        &nbsp;&nbsp;&nbsp;
                                        <img
                                            className="ml-5 w-4"
                                            src="/images/courses/course/video.svg"
                                        />
                                        <p className="text-[12px]">{video.metaData}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr
                        className="border-t border-gray-500"
                    />
                </div>
                {/* Section 4 ends here */}
                {/* Section 5 starts here */}
                <div>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={handleTitleClick}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section 1: Welcome, Welcome, Welcome!</h1>
                            <p className="text-sm">0 / 4 | 21min</p>
                        </div>
                        <span className="mx-2">
                            {showCheckboxes ?
                                <img
                                    className="w-[30px] h-auto"
                                    src="/images/courses/course/upArrow.svg"
                                /> :
                                <img
                                    className="w-[22px] h-auto"
                                    src="/images/courses/course/downArrow.svg"
                                />
                            }
                        </span>
                    </section>
                    {/* Checkboxes - Conditionally Rendered */}
                    {showCheckboxes && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {videoData.map((video, index) => (
                                <li
                                    key={index}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">{video.id + 1}. {video.title}</label>
                                    </div>
                                    <div className="flex space-x-2 px-1">
                                        &nbsp;&nbsp;&nbsp;
                                        <img
                                            className="ml-5 w-4"
                                            src="/images/courses/course/video.svg"
                                        />
                                        <p className="text-[12px]">{video.metaData}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr
                        className="border-t border-gray-500"
                    />
                </div>
                {/* Sectin 5 ends here */}
            </div>


        </div>
    );
};

export default Section_01;