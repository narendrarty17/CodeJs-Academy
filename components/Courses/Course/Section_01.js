import React from 'react';

const VideoComponent = ({ embedCode, title, description }) => (
    <div className="text-center">
        {/* YouTube Video */}
        <div className="max-w-screen-lg mx-auto mb-4">
            <div className="aspect-w-16 aspect-h-9">
                <div dangerouslySetInnerHTML={{ __html: embedCode }} className="aspect-content" />
            </div>
        </div>

        {/* Video Title */}
        <h2 className="text-2xl font-bold mt-4">{title}</h2>

        {/* Video Description */}
        <p className="text-gray-600 mt-2">{description}</p>
    </div>
);


const Section_01 = () => {
    const embedCode = '<iframe width="410" height="350" src="https://www.youtube.com/embed/7NMEbvbVck8?si=SIFAbmnJ_3X44Fg5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    const title = 'Title of the Video';
    const description = 'Description of the video goes here.';

    return (
        <div className="flex justify-center">
            <VideoComponent embedCode={embedCode} title={title} description={description} />
        </div>
    );
};

export default Section_01;
