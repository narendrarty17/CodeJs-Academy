import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const reviewsData = [
    {
        id: 0,
        rating: 4,
        reviewText: 'The courses provided valuable insights, and the hands-on projects were a game-changer for me. Great community and helpful resources.',
        reviewerImage: '/images/section_05/reviewer_02.png',
        reviewerName: 'Jane Smith',
        role: 'UX Designer',
        companyName: 'Company B',
    },
    {
        id: 1,
        rating: 5,
        reviewText: 'I had an amazing learning experience with comprehensive courses. The instructors were knowledgeable and supportive. Highly recommended!',
        reviewerImage: '/images/section_05/reviewer_01.png',
        reviewerName: 'John Doe',
        role: 'Developer',
        companyName: 'Company A',
    },
    {
        id: 2,
        rating: 5,
        reviewText: 'I found the platform user-friendly, and the course content was engaging. The support from the community and instructors made the journey enjoyable.',
        reviewerImage: '/images/section_05/reviewer_03.png',
        reviewerName: 'Alex Johnson',
        role: 'Software Engineer',
        companyName: 'Company C',
    },
    // Add more entries as needed
];

const RatingComponent = ({ rating }) => {
    return (
        <div className="flex">
            {Array.from({ length: rating }, (_, index) => (
                <img
                    key={index + 1}
                    src="/images/section_05/star.svg"
                    alt={`Star ${index + 1}`}
                    className="mr-2" // Add some margin between stars (adjust as needed)
                />
            ))}
        </div>
    );
};

const Section_05 = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
        if (direction === 'left' && selectedReview < reviewsData.length - 1) {
            setSelectedReview((prevReview) => prevReview + 1);
        } else if (direction === 'right' && selectedReview > 0) {
            setSelectedReview((prevReview) => prevReview - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="container mx-auto p-8">
            {/* Part 1: Heading and Description */}
            <div className="flex flex-col gap-1 mb-6">
                <h2 className="text-3xl font-bold text-white">What Our Students Say</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Part 2: Review Cards */}
            <div className="flex flex-wrap justify-center mx-auto space-x-4 mb-4" {...handlers}>
                {reviewsData
                    .filter((_, index) => (isSmallScreen ? index === selectedReview : true))
                    .map((review) => (
                        <div
                            key={review.id}
                            className="bg-white shadow-md w-96 pb-4 rounded-md"
                        >
                            {/* Section 1: Rating */}
                            <div className="p-4 text-2xl text-black font-bold">
                                <RatingComponent rating={review.rating} />
                            </div>

                            {/* Section 2: Review Text */}
                            <p className="px-4 text-gray-600 line-clamp-3 mb-4 h-24 overflow-hidden">
                                {review.reviewText}
                            </p>

                            {/* Section 3: Reviewer Information */}
                            <div className="flex items-center justify-start h-16 p-4">
                                {/* Part 1: Reviewer Image */}
                                <img
                                    src={review.reviewerImage}
                                    alt="Reviewer"
                                    className="w-16 h-16 object-cover rounded-full"
                                />

                                {/* Part 2: Reviewer Name and Company */}
                                <div className="ml-4 flex flex-col items-start">
                                    <p className="font-bold text-gray-500">{review.reviewerName}</p>
                                    <div className="text-gray-800">
                                        {review.role}, {review.companyName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Part 3: review Dots */}
            <div className="flex justify-center mb-6">
                {reviewsData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 ${selectedReview === index ? 'bg-white' : 'bg-gray-600'
                            }`}
                        onClick={() => setSelectedReview(index)}
                    />
                ))}
            </div>

            {/* Part 4: View All Button */}
            <div className="flex justify-center">
                <button className="text-white border border-white text-base leading-6 whitespace-nowrap justify-center items-stretch border px-4 py-2 rounded-md border-solid">
                    View All Courses
                </button>
            </div>
        </section>
    );
};

export default Section_05;