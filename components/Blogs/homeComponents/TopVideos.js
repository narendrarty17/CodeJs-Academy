import BlogCardVertical from "./subHomeComponents/BlogCardVertical";
import VideoCard from "./subHomeComponents/VideoCard";

const TopVideos = () => {
    return (
        <div className="flex flex-col bg-gray-800 gap-4 py-8">
            <h1 className="text-2xl px-8 md:px-20">Top Videos</h1>
            <div className="flex flex-col mt-4 md:flex-row gap-4 md:gap-8 px-8 md:px-20">
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default TopVideos;