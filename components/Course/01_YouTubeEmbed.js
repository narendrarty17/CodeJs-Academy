const YouTubeEmbed = ({ embedId }) => {
    return (
        <div className="flex justify-center aspect-w-16 aspect-h-9 w-full h-auto">
            <iframe
                className="w-full h-[232px] md:h-[480px]"
                src={`https://www.youtube.com/embed/${embedId}?si=${embedId}&rel=0`}
                title="YouTube video player"
                allow="accelerometer; gyroscope;"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;