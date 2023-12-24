import React from 'react';

const Section_01 = () => {
    return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 p-8 mb-4 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Learn New Skills Online with Ease</h2>
                <p className="text-gray-400">
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
            <div className="w-full md:w-1/2  mb-[210px] md:mb-[0px] relative z-0" style={{ paddingBottom: '50%' }}>
                <img
                    src="/images/section_01/posterImage.jpg"
                    alt="Learning Section"
                    className="absolute z-0 inset-0 w-full h-auto object-cover max-w-full md:w-full md:h-auto"
                />
            </div>
        </div>
    );
};

export default Section_01;