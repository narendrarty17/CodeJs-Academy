import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, useAnimation } from 'framer-motion';

const instructorsData = [
    {
        id: 0,
        image: "/images/section_06/instructor_01.webp",
        name: "Narendra",
        role: "Founder & Web Developer"
    },
    {
        id: 1,
        image: "/images/section_06/instructor_02.webp",
        name: "Vishal",
        role: "Founder & Web Developer"
    }
]


const Section_06 = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectedInstructor, setSelectedInstructor] = useState(0);
    const controls = useAnimation();

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
        if (direction === 'left' && selectedInstructor < instructorsData.length - 1) {
            swipeAnimation('left');
            setSelectedInstructor((prevInstructor) => prevInstructor + 1);
        } else if (direction === 'right' && selectedInstructor > 0) {
            swipeAnimation('right');
            setSelectedInstructor((prevInstructor) => prevInstructor - 1);
        }
    };

    const swipeAnimation = async (direction) => {
        const cardWidth = 300; // Adjust as needed
        const offset = direction === 'left' ? -cardWidth : cardWidth;

        await controls.start({ x: offset, opacity: 0 });

        // Reset animation
        controls.set({ x: 0, opacity: 1, transition: { duration: 0.2 } });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen]);


    return (
        <div className="text-center py-8">
            {/* Part 1: Heading and Description */}
            <div className="mb-8 px-8">
                <h2 className="text-3xl font-bold">MEET YOUR INSTRUCTORS</h2>
                <p className="text-gray-400">All our courses are taught by us - Max & Manuel. Because we love what we do.</p>
            </div>

            {/* Part 2: Instructor Cards */}
            <div
                className="flex justify-center space-x-8 mb-4"
                {...handlers}
                animate={controls}
            >
                {/* Instructor 1 */}
                {instructorsData
                    .filter((_, index) => (isSmallScreen ? index === selectedInstructor : true))
                    .map((instructor) => (
                        <div
                            key={instructor.id}
                            className="flex items-center justify-center text-center w-[90%] md:w-[400px] bg-gray-800 rounded-md"
                        >
                            <img
                                src={instructor.image}
                                alt="Max"
                                className="p-6 w-1/2 rounded-md"
                            />

                            <div className="flex flex-col gap-2">
                                <div className="px-4">
                                    <strong className="text-2xl">{instructor.name}</strong>
                                    <p>{instructor.role}</p>
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
                    ))}
            </div>

            {/* Part 3: Dots */}
            {isSmallScreen && (
                <div className="flex justify-center mb-6">
                    {instructorsData.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full mx-1 ${selectedInstructor === index ? 'bg-white' : 'bg-gray-600'
                                }`}
                            onClick={() => setSelectedInstructor(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Section_06;