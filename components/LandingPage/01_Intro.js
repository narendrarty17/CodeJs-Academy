import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Section_01 = () => {
    const darkerBlueColor = '#2563EB'; // Adjust this color to your preference
    const lighterGrayColor = '#718096'; // Adjust this color to your preference


    const buttonVariant_01 = {
        hover: {
            backgroundColor: darkerBlueColor, // New background color on hover
            color: '#FFFFFF', // New text color on hover
            transition: {
                duration: 0.3,
            },
        },
    };

    const buttonVariant_02 = {
        hover: {
            backgroundColor: lighterGrayColor, // New background color on hover
            color: '#FFFFFF', // New text color on hover
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center md:flex-row mt-[10px] md:mt-0"
        >
            <div className="w-full md:w-1/2 p-8 mb-4 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-white">Learn New Skills Online with Ease</h2>
                <p className="text-gray-400">
                    Explore a world of knowledge with our extensive selection of online courses.
                </p>
                <div className="mt-4 flex flex-wrap gap-y-5 gap-x-3 md:gap-x-5">
                    <motion.button
                        className="bg-blue-500 text-white px-4 py-2 rounded w-200"
                        whileHover="hover"
                        variants={buttonVariant_01}
                    >
                        Get Started
                    </motion.button>
                    <Link href="/#courses">
                        <motion.button
                            className="bg-gray-800 text-white px-4 py-2 rounded w-200"
                            whileHover="hover"
                            variants={buttonVariant_02}
                        >
                            Explore Courses
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div
                className="w-full md:w-1/2  mb-[210px] md:mb-[0px] relative z-0"
                style={{ paddingBottom: '45.57%' }}
            >
                <motion.img
                    src="/images/landingPage/section_01/posterImage.jpg"
                    alt="Learning Section"
                    className="absolute z-0 inset-0 w-full h-auto object-cover max-w-full md:w-full md:h-auto"
                />
            </div>
        </motion.div>
    );
};

export default Section_01;