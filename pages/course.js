import React, { useState } from 'react';

{/* Importing Data */ }
import linksList from '@/public/data/linksList.json';
import courseBtns from '@/public/data/courseBtns';
import courseContent from '@/public/data/courseContent.json';

{/* Importing Course Components */ }
import ContentList from '@/components/Course/02_ContentList';
import YouTubeEmbed from '@/components/Course/01_YouTubeEmbed';
import Overview from '@/components/Course/03_Overview';
import QuestionsAndAnswers from '@/components/Course/04_QuestionsAndAnswers';

{/* Importing utils Components */ }
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';


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

    return (
        <>
            <Header />
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
                {selectedButton === "courseContent" && (
                    <ContentList
                        sections={courseContent}
                        selectedSection={selectedSection}
                        selectedVideo={selectedVideo}
                        handleSectionSelection={handleSectionSelection}
                        handleVideoSelection={handleVideoSelection}
                    />
                )}

                {/* Overview Section */}
                {selectedButton === "overview" && (
                    <Overview />
                )}

                {/* Questions and Answers */}
                {selectedButton === 'q&a' && (
                    <QuestionsAndAnswers />
                )}
            </div>
            <Footer />
        </>
    );
};

export default Section_01;