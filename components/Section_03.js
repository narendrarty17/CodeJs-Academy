import React from 'react';

const Section_03 = () => {
    return (
        <section className="container mx-auto p-8 flex flex-col justify-center md:items-start md:flex-row items-center">
            {/* Content */}
            <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </h2>
                <p className="text-gray-400 mb-2">
                    Embarking on your web development journey with us means learning from a faculty of seasoned instructors who are not just teachers but mentors on your path to mastery. Our instructors don't simply cover the syllabus; they curate an immersive curriculum designed to equip you with the skills demanded by the ever-evolving tech industry.
                </p>
                <p className="text-gray-400 mb-2">
                    Their commitment to your success is evident in their personalized approach to teaching, fostering an environment where questions are encouraged, collaboration is celebrated, and the pursuit of excellence is a shared endeavor between instructor and student.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">
                    Explore Courses
                </button>
            </div>

            {/* Image */}
            <div className="flex justify-center md:w-1/2 mt-10 md:mt-4">
                <img
                    src="/images/section_03/posterImage.jpg"  // Update the image path
                    alt="Section Image"
                    className="w-full md:w-full lg:w-2/3 h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default Section_03;
