import React, { useState } from 'react';
import { motion } from 'framer-motion';

const courseData = [
    {
        id: 0,
        image: '/images/section_04/course_01.png',
        category: 'Design',
        rating: 5.0,
        title: 'Your 1st Course',
        description: 'Course description text goes here. Course description text goes here.',
        enrollButton: '$430',
    },
    {
        id: 1,
        image: '/images/section_04/course_02.png',
        category: 'Management',
        rating: 4.5,
        title: 'Your 2nd Course',
        description: 'Another course description. More text goes here.',
        enrollButton: '$250',
    },
    {
        id: 2,
        image: '/images/section_04/course_03.png',
        category: 'Programming',
        rating: 4.5,
        title: 'Your 3rd Course',
        description: 'Another course description. More text goes here.',
        enrollButton: '$250',
    },
    // Add more courses as needed
];

const Section_04 = () => {
    const [selectedButton, setSelectedButton] = useState('Popular');

    const darkerBlueColor = '#2563EB'; // Adjust this color to your preference

    const buttonVariant_01 = {
        hover: {
            backgroundColor: darkerBlueColor, // New background color on hover
            color: '#FFFFFF', // New text color on hover
            transition: {
                duration: 0.3,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
    };

    const courseVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.section
            className="container mx-auto p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Part 1: Heading and Description */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Courses</h2>
                <p className="text-gray-600">Your Ultimate Guide to Learning</p>
            </div>

            {/* Part 2: Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
                {/* Your buttons code here */}
                <button
                    className={`text-gray-600 hover:text-blue-500 focus:text-blue-500 focus:underline ${selectedButton === 'Popular' && 'text-blue-600 underline' // Conditionally apply styles
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
            <motion.div className="flex flex-wrap justify-around" variants={containerVariants} initial="hidden" animate="visible">
                {courseData
                    .map((course) => (
                        <motion.div
                            key={course.id}
                            className="bg-white shadow-md w-80 mb-8"
                            variants={courseVariants}
                            whileHover={{ scale: 1.05 }} // Add this line for hover effect
                        >
                            {/* Section 1: Image */}
                            <img
                                src={course.image}
                                alt="Course Image"
                                className="w-full h-auto object-cover mb-4"
                            />

                            {/* Section 2: Category and Rating */}
                            <div className="px-4 mb-2 text-gray-500 flex justify-between items-center">
                                <span>{course.category}</span>
                                <div>
                                    <span className="mx-2">&bull;</span>
                                    <span>Rating: {course.rating}</span>
                                </div>
                            </div>

                            {/* Section 3: Title */}
                            <h3 className="px-4 text-xl font-bold text-black mb-2 truncate">{course.title}</h3>

                            {/* Section 4: Description */}
                            <p className="px-4 text-gray-600 line-clamp-2 mb-4">
                                {course.description}
                            </p>

                            {/* Section 5: Buttons */}
                            <div className="pl-4 pb-4 flex justify-start items-center">
                                <motion.button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    whileHover="hover"
                                    variants={buttonVariant_01}
                                >
                                    Enroll Now
                                </motion.button>
                                <button className="text-gray-700 px-4 py-2 font-semibold">{course.enrollButton}</button>
                            </div>
                        </motion.div>
                    ))}
            </motion.div>

            {/* Part 4: View All Button */}
            <div className="flex justify-center">
                <button className="text-white border border-white text-base leading-6 whitespace-nowrap justify-center items-stretch border px-4 py-2 rounded-md border-solid">
                    View All Courses
                </button>
            </div>
        </motion.section>
    );
};

export default Section_04;