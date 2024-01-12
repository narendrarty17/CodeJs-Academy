const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const ContentList = ({
    sections,
    selectedSection,
    selectedVideo,
    handleSectionSelection,
    handleVideoSelection,
    handleVideoClick
}) => {

    return (
        <div className="mx-3 md:mx-56 mt-10 bg-gray-900">
            {/* Title with Down Arrow */}
            {/* Horizontal Gray Line */}
            <hr
                className="border-t border-gray-500"
            />
            {/* Section 1 starts here */}
            {sections.map((section, index) => (
                <div key={section.index}>
                    <section
                        className="flex items-center justify-between cursor-pointer px-4 py-4"
                        onClick={() => handleSectionSelection(index)}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Section {index + 1}: {section.title}</h1>
                            <p className="text-sm">0 / {section.lectures.length} | 40 min</p>
                        </div>
                        <span className="mx-2">
                            {selectedSection[index] ?
                                <img
                                    className="w-[30px] h-auto"
                                    src="/images/courses/course/upArrow.svg"
                                /> :
                                <img
                                    className="w-[22px] h-auto"
                                    src="/images/courses/course/downArrow.svg"
                                />
                            }
                        </span>
                    </section>
                    {/* Checkboxes - Conditionally Rendered */}
                    {selectedSection[index] && (
                        <ul className="bg-black">
                            {/* Render your checkboxes here */}
                            {section.lectures.map((lecture, index) => (
                                <li
                                    key={index}
                                    className="h-16 space-y-1 hover:bg-gray-600"
                                >
                                    <div className='flex flex-row items-end space-x-2'>
                                        &nbsp;&nbsp;&nbsp;
                                        <input
                                            onChange={() => {
                                                handleVideoSelection(lecture.lectureSr);
                                            }}
                                            type="checkbox"
                                            checked={selectedVideo[lecture.lectureSr - 1] ? true : false}
                                            id="checkbox1"
                                        />
                                        <label htmlFor="checkbox1">
                                            <a
                                                onClick={() => handleVideoClick(lecture.lectureSr)}
                                                href="#"
                                            >
                                                {truncateText(`${lecture.lectureSr}. ${lecture.title}`, 40)}
                                            </a>
                                        </label>
                                    </div>
                                    <div className="flex space-x-2 px-1">
                                        &nbsp;&nbsp;&nbsp;
                                        <img
                                            className="ml-5 w-4"
                                            src="/images/courses/course/video.svg"
                                        />
                                        <p className="text-[12px]">3 min</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr
                        className="border-t border-gray-500"
                    />
                </div>
            ))}
        </div>
    );
};

export default ContentList;