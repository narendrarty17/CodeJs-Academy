import React, { useState, useEffect } from 'react';
import courseBtns from '@/public/data/courseBtns';

import courseContent from '@/public/data/courseContent.json';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const ContentList = ({ sections, selectedSection, selectedVideo, handleSectionSelection, handleVideoSelection }) => {
    return (
        <div className="mx-3 md:mx-56 mt-10 bg-gray-900">
            {/* Title with Down Arrow */}
            {/* Horizontal Gray Line */}
            <hr
                className="border-t border-gray-500"
            />
            {/* Section 1 starts here */}
            {sections.map((section) => (
                <div key={section.sectionId}>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={() => handleSectionSelection(section.sectionId)}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section {section.sectionId + 1}: {section.sectionTitle}</h1>
                            <p className="text-sm">0 / {section.contentCount} | {section.contentLength}</p>
                        </div>
                        <span className="mx-2">
                            {selectedSection[section.sectionId] ?
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
                    {selectedSection[section.sectionId] && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {section.videosData.map((video) => (
                                <li
                                    key={video.srNo}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='flex flex-row items-end space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input
                                            onChange={() => handleVideoSelection(video.srNo)}
                                            type="checkbox"
                                            checked={selectedVideo[video.srNo - 1] ? true : false}
                                            id="checkbox1"
                                        />
                                        <label htmlFor="checkbox1">
                                            <a href="#">
                                                {truncateText(`${video.srNo}. ${video.title}`, 40)}
                                            </a>
                                        </label>
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
            ))}
        </div>
    );
};

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="flex justify-center aspect-w-16 aspect-h-9 w-full h-auto">
            <iframe
                className="w-full h-[232px] md:h-[480px]"
                src={`https://www.youtube.com/embed/7NMEbvbVck8?si=${embedId}&rel=0`}
                title="YouTube video player"
                allow="accelerometer; gyroscope;"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const Section_01 = () => {
    // State to track the selected button
    const [selectedButton, setSelectedButton] = useState('courseContent');
    const [selectedSection, setSelectedSection] = useState(Array(courseContent.length).fill(false));

    // Fetching srNo of the last video in the last element
    const lastSection = courseContent[courseContent.length - 1];
    const lastVideo = lastSection.videosData[lastSection.videosData.length - 1];
    const numVideo = lastVideo.srNo;

    const [selectedVideo, setSelectedVideo] = useState(Array(numVideo).fill(false));

    const handleVideoSelection = (srNo) => {
        setSelectedVideo(prevSelectedVideo => {
            const videoIndex = srNo - 1;
            const updatedSelectedVideo = [...prevSelectedVideo];
            updatedSelectedVideo[videoIndex] = !updatedSelectedVideo[videoIndex];
            console.log(updatedSelectedVideo); // Log the updated state
            return updatedSelectedVideo;
        });
    };

    const handleSectionSelection = (id) => {
        setSelectedSection(prevSelectedSection => {
            const temp = !prevSelectedSection[id];
            const updatedSelectedSection = [...prevSelectedSection];
            updatedSelectedSection[id] = temp;
            console.log(updatedSelectedSection); // Log the updated state
            return updatedSelectedSection;
        });
    };


    useEffect(() => {
        console.log('useEffect ran');
    }, [selectedVideo]);

    return (
        <div className="mb-4">
            {/* Youtube video in video player */}
            <YouTubeEmbed embedId="4RMeKVMlID8OiSSP" />
            {/* Buttons for course content, overview, Q&A, and Reviews */}
            <div
                className="flex justify-start mt-8 space-x-4 mx-2 md:mx-48 font-bold"
            >
                {courseBtns.map((link, index) => (
                    <button
                        key={index}
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
            <ContentList
                sections={courseContent}
                selectedSection={selectedSection}
                selectedVideo={selectedVideo}
                handleSectionSelection={handleSectionSelection}
                handleVideoSelection={handleVideoSelection}
            />
        </div>
    );
};

export default Section_01;