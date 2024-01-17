import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const SectionHeader = ({ index,
    handleSectionSelection,
    title,
    lecturesLength,
    selectedSection
}) => (
    <section
        className="flex cursor-pointer  items-center justify-between px-4 py-4"
        onClick={() => handleSectionSelection(index)}
    >
        <div className="flex flex-col gap-2">
            <h1 className="font-bold">
                Section {index + 1}: {title}
            </h1>
            <p className="text-sm">0 / {lecturesLength} | 40 min</p>
        </div>
        <span className="mx-2">
            <img
                className={`h-auto ${selectedSection ? 'w-[30px]' : 'w-[20px]'}`}
                src={`/images/courses/course/${selectedSection ? 'upArrow' : 'downArrow'}.svg`}
            />
        </span>
    </section>
);

const LectureItem = ({
    currentVideo,
    lectureSr,
    handleVideoSelection,
    selectedVideo,
    handleVideoClick, title
}) => {
    const { isAuthenticated } = useAuth0();

    return (
        <li
            key={lectureSr}
            className={`relative h-16 space-y-1 ${currentVideo === lectureSr ? "bg-gray-600" : ""} hover:bg-gray-600`}
        >
            <div className="flex flex-row items-end space-x-2">
                &nbsp;&nbsp;&nbsp;
                <input
                    onChange={() => {
                        handleVideoSelection(lectureSr);
                    }}
                    type="checkbox"
                    checked={
                        selectedVideo[lectureSr - 1] ? true : false
                    }
                    id="checkbox1"
                />
                <label
                    onClick={() => {
                        {/* Here we are showing only first 3 videos if user is unauthenticated */ }
                        if (isAuthenticated || lectureSr < 4) {
                            handleVideoClick(lectureSr);
                        }
                    }}
                    htmlFor="checkbox1"
                >
                    <Link className="flex items-center justify-between" href="#">
                        <div>
                            {truncateText(`${lectureSr}. ${title}`, 40)}
                        </div>
                        <div>
                            {!(isAuthenticated || lectureSr < 4) && (
                                <img
                                    className="w-4 absolute right-8"
                                    src="/images/courses/course/locked.svg"
                                />
                            )}
                        </div>
                    </Link>
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
    );
}

const ContentList = ({
    sections,
    selectedSection,
    selectedVideo,
    currentVideo,
    handleSectionSelection,
    handleVideoSelection,
    handleVideoClick,
}) => {

    return (
        <div className="mx-3 mt-10 bg-gray-900 mb-20 md:mx-56">
            <hr className="border-t border-gray-500" />
            {sections.map((section, index) => (
                <div key={section.title}>
                    <SectionHeader
                        index={index}
                        handleSectionSelection={handleSectionSelection}
                        title={section.title}
                        lecturesLength={section.lectures.length}
                        selectedSection={selectedSection[index]}
                    />
                    {selectedSection[index] && (
                        <ul className="bg-black">
                            {section.lectures.map((lecture) => (
                                <LectureItem
                                    key={lecture.lectureSr}
                                    currentVideo={currentVideo}
                                    lectureSr={lecture.lectureSr}
                                    handleVideoSelection={handleVideoSelection}
                                    selectedVideo={selectedVideo}
                                    handleVideoClick={handleVideoClick}
                                    title={lecture.title}
                                />
                            ))}
                        </ul>
                    )}
                    {/* Horizontal Gray Line */}
                    <hr className="border-t border-gray-500" />
                </div>
            ))}
        </div>
    );
};

export default ContentList;
