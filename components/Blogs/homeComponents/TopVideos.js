import BlogCardVertical from "./BlogCardVertical";
import VideoCard from "./VideoCard";

const TopVideos = () => {
    return (
        <div className="flex flex-col mt-16 gap-4 mb-8 mx-auto">
            <h1 className="text-3xl px-8 md:px-20">Top Videos</h1>
            <div className="flex flex-col mt-4 md:flex-row gap-4 md:gap-8 px-8 md:px-20">
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default TopVideos;