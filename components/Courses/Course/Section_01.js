import React from 'react';

const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="flex justify-center aspect-w-16 aspect-h-9 w-full h-auto">
            <iframe
                className="w-full h-[232px] md:w-2/3 md:h-[480px] bg-gray-200"
                src="https://www.youtube.com/embed/7NMEbvbVck8?si=4RMeKVMlID8OiSSP&rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; gyroscope;"
                allowFullScreen
            ></iframe>
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