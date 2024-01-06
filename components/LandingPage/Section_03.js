import React from 'react';
import { motion } from 'framer-motion';

const Section_03 = () => {
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
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const contentVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
    };

    return (
        <motion.section
            className="container mx-auto p-8 flex flex-col justify-center md:items-start md:flex-row items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Content */}
            <motion.div className="md:w-1/2 md:pr-8" variants={contentVariants}>
                <h2 className="text-3xl font-bold mb-4">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </h2>
                <p className="text-gray-400 mb-2">
                    Embarking on your web development journey with us means learning from a faculty of seasoned instructors who are not just teachers but mentors on your path to mastery. Our instructors don't simply cover the syllabus; they curate an immersive curriculum designed to equip you with the skills demanded by the ever-evolving tech industry.
                </p>
                <p className="hidden md:flex text-gray-400 mb-2">
                    Their commitment to your success is evident in their personalized approach to teaching, fostering an environment where questions are encouraged, collaboration is celebrated, and the pursuit of excellence is a shared endeavor between instructor and student.
                </p>
                <motion.button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    whileHover="hover"
                    variants={buttonVariant_01}
                >
                    Enroll Now
                </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div className="flex justify-center md:w-1/2 mt-10 md:mt-4" variants={imageVariants}>
                <img
                    src="/images/landingPage/section_03/posterImage.jpg"  // Update the image path
                    alt="Section Image"
                    className="w-full md:w-full lg:w-2/3 h-auto object-cover"
                />
            </motion.div>
        </motion.section>
    );
};

export default Section_03;