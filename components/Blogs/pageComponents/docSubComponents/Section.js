import { useContext } from "react";
import ParseParagraph from "./ParseParagraph";
import SubSections from "./SubSections";
import { IdTypeContext } from "./../Context";
import { BlogImgsBaseDir } from '@/components/Blogs/basePath';

const Section = ({ section }) => {
    const { id, type } = useContext(IdTypeContext);
    return (
        <section className="mb-12"> {/* Added key prop */}
            <h2 className="text-gray-200 text-2xl font-bold mb-4">
                {section.heading}
            </h2>
            {/* Render section content */}
            {section.content && (
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {ParseParagraph(section.content)}
                </p>
            )}
            {/* Render section image */}
            {section.image && (
                <img
                    className='w-[100%] md:w-[70%] mx-auto mb-4 rounded-lg'
                    src={`${BlogImgsBaseDir}/sections/${type}/${id}/${section.image}`}
                    alt="cover image"
                />
            )}
            {
                section.code && (
                    <Code code={section.code} />
                )
            }
            {/* Render subsections if they exist */}
            {section.subsections && (
                <SubSections id={id} type={type} subsections={section.subsections} />
            )}
        </section>
    );
}
export default Section;