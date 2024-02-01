import BlogCardHorizontal from "./BlogCardHorizontal";

const CareerAdvice = () => {
    return (
        <div className="px-8 md:px-20">
            <div className="flex gap-4 items-center">
                <span className="bg-green-400 w-8 h-8 rounded-full" />
                <h1 className="text-2xl">Career Advice</h1>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-10 mt-8">
                <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8">
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                    <BlogCardHorizontal />
                </div>
                <button className="text-lg border-2 border-white text-white py-3 px-6 rounded-full">
                    Read me
                </button>
            </div>
        </div>
    );
}

export default CareerAdvice;