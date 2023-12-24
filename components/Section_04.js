import React, { useState } from 'react';

const Section_04 = () => {
    // State to track the selected button
    const [selectedButton, setSelectedButton] = useState('Popular');

    return (
        <section className="container mx-auto p-8">
            {/* Part 1: Heading and Description */}
            <div className="text-center mb-6">
                {/* Reduced margin-bottom to 6 */}
                <h2 className="text-3xl font-bold">Courses</h2>
                <p className="text-gray-600">Your Ultimate Guide to Learning</p>
            </div>

            {/* Part 2: Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    className={`text-gray-600 hover:text-blue-500 focus:text-blue-500 focus:underline ${selectedButton === 'Popular' && 'text-blue-500 underline' // Conditionally apply styles
                        }`}
                    onClick={() => setSelectedButton('Popular')}
                >
                    Popular
                </button>
                <button
                    className={`text-gray-600 hover:text-blue-500 focus:text-blue-500 focus:underline ${selectedButton === 'Recommended' && 'text-blue-500 underline' // Conditionally apply styles
                        }`}
                    onClick={() => setSelectedButton('Recommended')}
                >
                    Recommended
                </button>
                <button
                    className={`text-gray-600 hover:text-blue-500 focus:text-blue-500 focus:underline ${selectedButton === 'Best Price' && 'text-blue-500 underline' // Conditionally apply styles
                        }`}
                    onClick={() => setSelectedButton('Best Price')}
                >
                    Best Price
                </button>
            </div>

            {/* Part 3: Courses */}
            <div className="flex flex-wrap justify-around">
                {/* Course Card 1 */}
                <div className="bg-white border border-gray-200 shadow-md w-80 mb-8">
                    {/* Section 1: Image */}
                    <img
                        src="/images/section_04/course_01.png" // Updated image path
                        alt="Course Image"
                        className="w-full h-auto object-cover mb-4"
                    />

                    {/* Section 2: Category and Rating */}
                    <div className="px-4 mb-2 text-gray-500 flex justify-between items-center">
                        <span>Design</span>
                        <div>
                            <span className="mx-2">&bull;</span>
                            <span>Rating: 5.0</span>
                        </div>
                    </div>

                    {/* Section 3: Title */}
                    <h3 className="px-4 text-xl font-bold text-black mb-2 truncate">Course Title Here</h3>

                    {/* Section 4: Description */}
                    <p className="px-4 text-gray-600 line-clamp-2 mb-4">
                        Course description text goes here. Course description text goes here.
                    </p>

                    {/* Section 5: Buttons */}
                    <div className="pl-4 pb-4 flex justify-start items-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Enroll Now</button>
                        <button className="text-gray-700 px-4 py-2 font-semibold">$430</button>
                    </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white border border-gray-200 shadow-md w-80 mb-8">
                    {/* Section 1: Image */}
                    <img
                        src="/images/section_04/course_01.png" // Updated image path
                        alt="Course Image"
                        className="w-full h-auto object-cover mb-4"
                    />

                    {/* Section 2: Category and Rating */}
                    <div className="px-4 mb-2 text-gray-500 flex justify-between items-center">
                        <span>Design</span>
                        <div>
                            <span className="mx-2">&bull;</span>
                            <span>Rating: 5.0</span>
                        </div>
                    </div>

                    {/* Section 3: Title */}
                    <h3 className="px-4 text-xl font-bold text-black mb-2 truncate">Course Title Here</h3>

                    {/* Section 4: Description */}
                    <p className="px-4 text-gray-600 line-clamp-2 mb-4">
                        Course description text goes here. Course description text goes here.
                    </p>

                    {/* Section 5: Buttons */}
                    <div className="pl-4 pb-4 flex justify-start items-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Enroll Now</button>
                        <button className="text-gray-700 px-4 py-2 font-semibold">$430</button>
                    </div>
                </div>

                {/* Course Card 3 */}
                <div className="bg-white border border-gray-200 shadow-md w-80 mb-8">
                    {/* Section 1: Image */}
                    <img
                        src="/images/section_04/course_01.png" // Updated image path
                        alt="Course Image"
                        className="w-full h-auto object-cover mb-4"
                    />

                    {/* Section 2: Category and Rating */}
                    <div className="px-4 mb-2 text-gray-500 flex justify-between items-center">
                        <span>Design</span>
                        <div>
                            <span className="mx-2">&bull;</span>
                            <span>Rating: 5.0</span>
                        </div>
                    </div>

                    {/* Section 3: Title */}
                    <h3 className="px-4 text-xl font-bold text-black mb-2 truncate">Course Title Here</h3>

                    {/* Section 4: Description */}
                    <p className="px-4 text-gray-600 line-clamp-2 mb-4">
                        Course description text goes here. Course description text goes here.
                    </p>

                    {/* Section 5: Buttons */}
                    <div className="pl-4 pb-4 flex justify-start items-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Enroll Now</button>
                        <button className="text-gray-700 px-4 py-2 font-semibold">$430</button>
                    </div>
                </div>


                {/* Repeat similar structure for additional courses */}
            </div>
        </section>
    );
};

export default Section_04;
