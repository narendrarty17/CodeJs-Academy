import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

// ... (rest of your code)

const Section_05 = () => {
    const [selectedReview, setSelectedReview] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSwipe = (direction) => {
        if (direction === 'left' && selectedReview < reviewsData.length - 1) {
            setSelectedReview(selectedReview + 1);
        } else if (direction === 'right' && selectedReview > 0) {
            setSelectedReview(selectedReview - 1);
        }
    };

    return (
        <section className="container mx-auto p-8">
            {/* ... (rest of your code) */}

            {/* Part 2: Review Cards */}
            <div className={`flex flex-wrap justify-center mx-auto space-x-4`} {...handlers}>
                {reviewsData
                    .filter((_, index) => isSmallScreen ? index === selectedReview : true)
                    .map((review, index) => (
                        <div
                            key={index}
                            className={`bg-white shadow-md w-full sm:w-96 h-80 mb-8 cursor-pointer rounded-md overflow-hidden flex-shrink-0 ${selectedReview === index ? 'border border-blue-500' : ''}`}
                            onClick={() => setSelectedReview(index)}
                        >
                            {/* Section 1: Rating */}
                            <div className="p-4 text-2xl text-black font-bold">
                                <RatingComponent rating={review.rating} />
                            </div>

                            {/* Section 2: Review Text */}
                            <p className="px-4 text-gray-600 h-24 overflow-hidden">
                                {review.reviewText}
                            </p>

                            {/* Section 3: Reviewer Information */}
                            <div className="flex items-center justify-start p-4 h-16">
                                {/* ... (rest of the reviewer information section) */}
                            </div>
                        </div>
                    ))}
            </div>

            {/* ... (rest of your code) */}
        </section>
    );
};

export default Section_05;
