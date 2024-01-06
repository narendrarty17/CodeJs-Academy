import React, { useState } from 'react';
import courseBtns from '@/public/data/courseBtns';

import courseContent from '@/public/data/courseContent.json';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const ContentList = ({ sections, selectedSection, handleSectionSelection }) => {
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
                                    onClick={() => handleSectionSelection(section.sectionId)}
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
                                    <div className='space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="checkbox1" />
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

    const handleSectionSelection = (id) => {
        const numberOfSections = courseContent.length;
        const temp = !selectedSection[id];
        const initialSelectedSectionState = Array(numberOfSections).fill(false);
        initialSelectedSectionState[id] = temp;
        setSelectedSection(initialSelectedSectionState);
    }

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
                handleSectionSelection={handleSectionSelection}
                selectedSection={selectedSection}
            />
        </div>
    );
};

export default Section_01;