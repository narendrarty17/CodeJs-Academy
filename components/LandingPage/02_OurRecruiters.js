import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, useAnimation } from 'framer-motion';

import logosData from '@/public/data/logosData.json';

const Section_02 = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectedLogo, setSelectedLogo] = useState(0);
    const controls = useAnimation();

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
        if (direction === 'left' && selectedLogo < logosData.length - 1) {
            swipeAnimation('left');
            setSelectedLogo((prevLogo) => prevLogo + 1);
        } else if (direction === 'right' && selectedLogo > 0) {
            swipeAnimation('right');
            setSelectedLogo((prevLogo) => prevLogo - 1);
        }
    };

    const swipeAnimation = async (direction) => {
        const cardWidth = 300; // Adjust as needed
        const offset = direction === 'left' ? -cardWidth : cardWidth;

        await controls.start({ x: offset, opacity: 0 });

        // Reset animation
        controls.set({ x: 0, opacity: 1, transition: { duration: 0.2 } });
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 900);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        // Auto-swipe on small screens
        let swipeInterval;

        if (isSmallScreen) {
            swipeInterval = setInterval(() => {
                if (selectedLogo === logosData.length - 1) {
                    // Reset to the first review when all reviews have been swiped
                    setSelectedLogo(0);
                } else {
                    handleSwipe('left');
                }
            }, 1000);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(swipeInterval); // Clear the interval when the component is unmounted or the screen size changes
        };
    }, [isSmallScreen, selectedLogo]);

    return (
        <motion.section className="p-8">
            <div className="flex flex-col items-center md:flex-row md:justify-center container mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                    Your Path to Success: Meet Our Top Recruiters.
                </h2>

                {/* Image container */}
                <div
                    className="flex items-center gap-2 justify-center w-full md:flex-row md:items-start md:justify-center md:w-[80%] overflow-hidden"
                    {...handlers}
                    animate={controls}
                >
                    {/* Company logos */}
                    {logosData
                        .filter((_, index) => (isSmallScreen ? index === selectedLogo : true))
                        .map((logo) => (
                            <motion.img
                                key={logo.id}
                                src={logo.url}
                                alt={logo.alt}
                                initial={{ x: 0, opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                className="h-20 w-auto md:h-16 mb-4 md:mb-0 md:mr-4"
                            />
                        ))
                    }
                </div>
            </div>
        </motion.section>
    );
};

export default Section_02;