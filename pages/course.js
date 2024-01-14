import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Importing Data
import courseBtns from '@/public/data/courseBtns';
import courseContent from '@/public/data/courseContent';

// Importing Course Components
import ContentList from '@/components/Course/02_ContentList';
import YouTubeEmbed from '@/components/Course/01_YouTubeEmbed';
import Overview from '@/components/Course/03_Overview';
import QuestionsAndAnswers from '@/components/Course/04_QuestionsAndAnswers';

// Importing Utils Components
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';

// Importing UI Components
import NotFound from '@/components/ui/NotFound';
import Loading from '@/components/ui/Loading';

const Section_01 = () => {
    // State to track the selected button we used 200 as dummy count of videos later on correct it
    const [selectedButton, setSelectedButton] = useState('courseContent');

    const [selectedSection, setSelectedSection] = useState([]);
    const [courseData, setCourseData] = useState(null);
    const [videoId, setVideoId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState([]);

    const router = useRouter();

    // Effect to fetch data on component mount
    useEffect(() => {
        // Currently I am fetching data from locally stored json file so for while fetData() from server is commented out
        // fetchData();
        // I am fetching data locally so this function for now i.e. fetchDataLocally()
        fetchDataLocally();
    }, []);

    // Fetch course data from local json file
    const fetchDataLocally = async () => {
        try {
            const result = courseContent;

            // Assuming the title you're looking for is "JavaScript Tutorials for Beginners"
            const titleToFind = "JavaScript Tutorials for Beginners";

            // Find the course object with the specified title
            const foundCourse = result.find(course => course.title === titleToFind);

            setCourseData(foundCourse);
            setVideoId(foundCourse.sections[0].lectures[0].videoId);
            setSelectedSection(Array(foundCourse.numSections).fill(false));
            setSelectedVideo(Array(foundCourse.numLectures).fill(false));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    // Fetch course data from server
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
            setSelectedSection(Array(foundCourse.numSections).fill(false));
            setSelectedVideo(Array(foundCourse.numLectures).fill(false));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    // Hnadle video selection
    const handleVideoSelection = (srNo) => {
        setSelectedVideo(prevSelectedVideo => {
            const videoIndex = srNo - 1;
            const updatedSelectedVideo = [...prevSelectedVideo];
            updatedSelectedVideo[videoIndex] = !updatedSelectedVideo[videoIndex];
            return updatedSelectedVideo;
        });
    };

    // Handle section selection
    const handleSectionSelection = (id) => {
        setSelectedSection(prevSelectedSection => {
            const temp = !prevSelectedSection[id];
            const updatedSelectedSection = [...prevSelectedSection];
            updatedSelectedSection[id] = temp;
            return updatedSelectedSection;
        });
    };

    // Handle video click
    const handleVideoClick = (srNo) => {
        const video = findVideoBySr(srNo);
        const videoId = video.videoId;
        console.log("videoId: ", videoId);
        if (videoId) {
            setVideoId(videoId);
            setCurrentVideo(srNo);
            router.push('/course#');
        }
    }

    // Find video by srNo
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

        return foundVideo;
    };

    // Loading state
    if (loading) {
        return (
            <Loading />
        );
    }

    // Error state
    if (error) {
        return (
            <NotFound message={error.message} />
        );
    }

    // Course not found state
    if (!courseData) {
        return <p>Course not found.</p>
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
                        currentVideo={currentVideo}
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