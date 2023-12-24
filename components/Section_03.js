import React from 'react';

const Section_03 = () => {
    return (
        <section className="container mx-auto p-8 flex flex-col md:flex-row items-center">
            {/* Content */}
            <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </h2>
                <p className="text-gray-400 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at justo vel justo cursus cursus non ac justo.
                    Fusce in hendrerit neque, nec ullamcorper ante. Vestibulum aliquet velit ac ultricies lacinia.
                </p>
                <p className="text-gray-400 mb-2">
                    Integer laoreet, quam in feugiat condimentum, nunc est vehicula velit, a aliquet nisl lectus sit amet sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at justo vel justo cursus cursus non ac justo.
                </p>
                <p className="text-gray-400 mb-4">
                    Fusce in hendrerit neque, nec ullamcorper ante. Vestibulum aliquet velit ac ultricies lacinia.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at justo vel justo cursus cursus non ac justo.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">
                    Explore Courses
                </button>
            </div>

            {/* Image */}
            <div className="flex justify-center md:w-1/2 mt-10 md:mt-0">
                <img
                    src="/images/section_03/posterImage.jpg"  // Update the image path
                    alt="Section Image"
                    className="w-full md:w-2/3 h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default Section_03;
