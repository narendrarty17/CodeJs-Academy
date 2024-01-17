import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Importing Data
import courseData from '@/public/data/courseList';

const Section_04 = () => {

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
            id="courses"
            className="container mx-auto p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Part 1: Heading and Description */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Courses</h2>
                <p className="text-gray-400">Your Ultimate Guide to Learning</p>
            </div>

            {/* Part 3: Courses */}
            <motion.div className="flex flex-wrap justify-around" variants={containerVariants} initial="hidden" animate="visible">
                {courseData
                    .map((course) => (
                        <Link
                            key={course.id}
                            href={course.url}
                        >
                            <motion.div
                                key={course.id}
                                className="bg-gray-200 shadow-md w-80 mb-8"
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
                                    <div className="flex flex-row">
                                        <span className="mx-2">
                                            <img src="/images/landingPage/section_04/star.svg" />
                                        </span>
                                        <span>
                                            {course.rating}
                                        </span>
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
                                    <div className="text-gray-700 px-4 py-2 font-semibold">{course.enrollButton}</div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
            </motion.div>

            {/* Part 4: View All Button */}
            {/* 
                <div className="flex justify-center">
                    <button className="text-white border border-white text-base leading-6 whitespace-nowrap justify-center items-stretch border px-4 py-2 rounded-md border-solid">
                        View All Courses
                    </button>
                </div> 
            */}
        </motion.section>
    );
};

export default Section_04;