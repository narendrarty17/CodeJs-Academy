import React, { useEffect, useState } from 'react';

{/* Importing Data */ }
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
    const [courseData, setCourseData] = useState(null);
    const [videoId, setVideoId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            return updatedSelectedVideo;
        });
    };

    const handleSectionSelection = (id) => {
        setSelectedSection(prevSelectedSection => {
            const temp = !prevSelectedSection[id];
            const updatedSelectedSection = [...prevSelectedSection];
            updatedSelectedSection[id] = temp;
            return updatedSelectedSection;
        });
    };

    const handleVideoClick = (srNo) => {
        const video = findVideoBySr(srNo);
        const videoId = video.videoId;
        console.log("videoId: ", videoId);
        if (videoId) {
            setVideoId(videoId);
            console.log("setVideoId: ", videoId);
        }
    }

    const findVideoBySr = (srNo) => {
        console.log("video srNo: ", srNo);
        let foundVideo = null;

        // Iterate through sections
        for (const section of courseData.sections) {
            // Iterate through lectures in each section
            for (const lecture of section.lectures) {
                // Check if the videoId matches
                if (lecture.lectureSr === srNo) {
                    foundVideo = lecture;
                    break; // Stop iterating once the video is found
                }
            }

            // Break the outer loop if the video is found
            if (foundVideo) {
                break;
            }
        }
        console.log("found video: ", foundVideo);

        return foundVideo;
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/courses/');
            const result = await response.json();

            // Assuming the title you're looking for is "JavaScript Tutorials for Beginners"
            const titleToFind = "JavaScript Tutorials for Beginners";

            // Find the course object with the specified title
            const foundCourse = result.data.data.find(course => course.title === titleToFind);

            setCourseData(foundCourse);
            setVideoId(foundCourse.sections[0].lectures[0].videoId);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        };
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!courseData) {
        return <p>Course not found.</p>
    }

    if (courseData) {
        console.log("Course Data: ", courseData);
    }

    return (
        <>
            <Header />
            <div className="mb-4">
                {/* Youtube video in video player */}
                <YouTubeEmbed embedId={videoId} />

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
                        sections={courseData.sections}
                        selectedSection={selectedSection}
                        selectedVideo={selectedVideo}
                        handleSectionSelection={handleSectionSelection}
                        handleVideoSelection={handleVideoSelection}
                        handleVideoClick={handleVideoClick}
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