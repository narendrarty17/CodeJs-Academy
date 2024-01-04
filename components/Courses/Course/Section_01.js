import React from 'react';

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="flex flex-row justify-between aspect-w-16 aspect-h-9 w-full h-auto">
            <iframe
                className="w-full h-[233px] md:w-2/3 md:h-[480px] bg-gray-200"
                src="https://www.youtube.com/embed/7NMEbvbVck8?si=4RMeKVMlID8OiSSP"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div
                className="hidden md:flex md:flex-col md:w-1/3"
            >
                <h1>Course Content</h1>
                <ul>
                    <li>Video 1: Video 1 title</li>
                    <li>Video 2: Video 2 title</li>
                    <li>Video 3: Video 3 title</li>
                    <li>Video 4: Video 4 title</li>
                </ul>
            </div>
        </div>
    );
};

const Section_01 = () => {
    return (
        <div>
            <YouTubeEmbed />
        </div>
    );
};

export default Section_01;