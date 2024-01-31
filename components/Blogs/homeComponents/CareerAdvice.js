import BlogCardHorizontal from "./BlogCardHorizontal";

const CareerAdvice = () => {
    return (
        <div className="px-20 mt-16">
            <div className="flex gap-4 items-center">
                <span className="text-3xl flex items-center justify-center bg-green-400 w-8 h-8 rounded-full" />
                <h1 className="text-3xl">Career Advice</h1>
            </div>
            <div>
                <div className="flex gap-8 mt-8">
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                </div>
                <div className="flex gap-8 mt-8">
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                </div>
                <div className="flex gap-8 mt-8">
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                </div>
            </div>
            <button className="text-lg border-2 border-white text-white mt-8 py-3 px-6 rounded-full">
                Read me
            </button>
        </div>
    );
}

export default CareerAdvice;