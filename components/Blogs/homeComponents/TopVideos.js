import BlogCardVertical from "./BlogCardVertical";

const TopVideos = () => {
    return (
        <div className="flex flex-col mt-16 gap-4 mx-auto">
            <h1 className="text-3xl px-20">Top Videos</h1>
            <div className="flex gap-8 px-20">
                <BlogCardVertical />
                <BlogCardVertical />
                <BlogCardVertical />
            </div>
        </div>
    );
}

export default TopVideos;