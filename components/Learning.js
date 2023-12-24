import React from 'react';

const LearningSection = () => {
    return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 p-8 mb-4 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Learn New Skills Online with Ease</h2>
                <p className="text-gray-600">
                    Explore a world of knowledge with our extensive selection of online courses.
                </p>
                <div className="mt-4 flex flex-wrap gap-y-5 gap-x-3 md:gap-x-5">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded w-200">
                        Start learning now
                    </button>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded w-200">
                        Explore Courses
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative" style={{ paddingBottom: '50%' }}>
                <img
                    src="/images/section_01/posterImage.png" // Update the image path
                    alt="Learning Section"
                    className="absolute inset-0 w-full h-[350px] object-cover max-w-full md:w-2/3 md:h-auto"
                />
            </div>
        </div>
    );
};

export default LearningSection;