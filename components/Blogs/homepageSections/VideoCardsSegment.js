import VideoCard from "@/components/Blogs/cards/VideoCard";

const VideoCardSegment = () => {
    return (
        <div className="flex flex-col bg-gray-800 gap-4 py-8">
            <h1 className="text-2xl px-8 md:px-20">Top Videos</h1>
            <div className="flex flex-col mt-4 md:flex-row md:justify-center gap-4 md:gap-12 px-8 md:px-20">
                <VideoCard id={1} type="videos" />
                <VideoCard id={2} type="videos" />
                <VideoCard id={3} type="videos" />
            </div>
        </div>
    );
}

export default VideoCardSegment;