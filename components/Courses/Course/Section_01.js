import React, { useState } from 'react';
import courseBtns from '@/public/data/courseBtns';

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="flex justify-center aspect-w-16 aspect-h-9 w-full h-auto">
            <iframe
                className="w-full h-[232px] md:w-2/3 md:h-[480px] bg-gray-200"
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
                className="flex justify-start mt-8 space-x-4 ml-2 md:ml-56 font-bold"
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
            <hr
                className="ml-2 mr-2 md:ml-56 md:mr-56 border-t border-gray-500"
            />
            {/* Course Content section */}
            <div className="ml-3 md:ml-56 mt-10">
                {/* Title with Down Arrow */}
                <div
                    className="flex items-center cursor-pointer"
                    onClick={handleTitleClick}
                >
                    <span>Title Text</span>
                    <span className="ml-2">
                        {showCheckboxes ? 'upArrow' : 'downArrow'}
                    </span>
                </div>

                {/* Checkboxes - Conditionally Rendered */}
                {showCheckboxes && (
                    <div>
                        {/* Render your checkboxes here */}
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Checkbox 1</label>

                        <input type="checkbox" id="checkbox2" />
                        <label htmlFor="checkbox2">Checkbox 2</label>

                        <input type="checkbox" id="checkbox3" />
                        <label htmlFor="checkbox3">Checkbox 3</label>

                        <input type="checkbox" id="checkbox4" />
                        <label htmlFor="checkbox4">Checkbox 4</label>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Section_01;