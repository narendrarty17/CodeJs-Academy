import React from 'react';

const Section_06 = () => {
    return (
        <div className="text-center py-8">
            {/* Part 1: Heading and Description */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold">MEET YOUR INSTRUCTORS</h2>
                <p className="text-gray-400">All our courses are taught by us - Max & Manuel. Because we love what we do.</p>
            </div>

            {/* Part 2: Instructor Cards */}
            <div className="flex justify-center space-x-8">
                {/* Instructor 1 */}
                <div className="flex items-center justify-center text-center w-[475px] bg-gray-800 rounded-md">
                    <img
                        src="/images/section_06/instructor_01.webp"
                        alt="Max"
                        className="p-6 w-1/2 rounded-md"
                    />

                    <div className="flex flex-col gap-2">
                        <div className="px-4">
                            <strong className="text-2xl">Max Doe</strong>
                            <p>Founder & Web Developer</p>
                        </div>
                        <div className="flex justify-center gap-2 items-center mt-4">
                            <a href="https://twitter.com/maxdoe" target="_blank" rel="noopener noreferrer">
                                <img src="/images/section_06/twitter.svg" alt="Twitter" className="w-6 h-6 mr-2" />
                            </a>
                            <a href="https://linkedin.com/in/maxdoe" target="_blank" rel="noopener noreferrer">
                                <img src="/images/section_06/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
                            </a>
                            <a href="https://youtube.com/maxdoe" target="_blank" rel="noopener noreferrer">
                                <img src="/images/section_06/youtube.svg" alt="YouTube" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Instructor 2 */}
                <div className="flex items-center justify-center text-center w-[475px] bg-gray-800 rounded-md">
                    <img
                        src="/images/section_06/instructor_01.webp"
                        alt="Max"
                        className="p-6 w-1/2 rounded-md"
                    />

                    <div className="flex flex-col gap-2">
                        <div className="px-4">
                            <strong className="text-2xl">Max Doe</strong>
                            <p>Founder & Web Developer</p>
                        </div>
                        <div className="flex justify-center gap-2 items-center mt-4">
                            <a href="https://twitter.com/maxdoe" target="_blank" rel="noopener noreferrer">
                                <img src="/images/section_06/twitter.svg" alt="Twitter" className="w-6 h-6 mr-2" />
                            </a>
                            <a href="https://linkedin.com/in/maxdoe" target="_blank" rel="noopener noreferrer">
                                <img src="/images/section_06/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
                            </a>
                            <a href="https://youtube.com/maxdoe" target="_blank" rel="noopener noreferrer">
                                <img src="/images/section_06/youtube.svg" alt="YouTube" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_06;