import Link from "next/link";
import { useContext } from "react";
import { IsSmallScreenContext } from '../Context';
import { BlogImgsBaseDir, baseUrl } from '@/components/Blogs/basePath';

const SuggestedReadList = ({ suggestedReads }) => {
    const isSmallScreen = useContext(IsSmallScreenContext);
    const limitedSuggestedReads = suggestedReads.slice(0, isSmallScreen ? 3 : suggestedReads.length);

    return (
        limitedSuggestedReads.map((read) => (
            <Link href={`${baseUrl}/blog?id=${read.id}&type=${read.type}`}>
                <li key={read.id} className="flex items-start mb-4 mr-4 w-[350px] lg:w-auto lg:mb-4 lg:mr-0">
                    {/* Suggested Read Image (Left) */}
                    <div className="pr-4">
                        <img
                            className="w-[100px] h-[80px] object-cover rounded"
                            src={`${BlogImgsBaseDir}/sections/${read.type}/${read.id}/${read.iconImage}`}
                            alt="Suggested Read" />
                    </div>

                    {/* Suggested Read Content (Right) */}
                    <div className="w-2/3">
                        {/* Suggested Read Header */}
                        <div className="flex items-center mb-1">
                            {/* Author Image */}
                            <img
                                src={`/images/blogs/blogContent/authorImgs/${read.authorImage}`}
                                alt="Author"
                                className="w-6 h-6 rounded-full mr-2"
                            />

                            {/* Author Name */}
                            <span className="text-[12px]">
                                {read.authorName}
                            </span>
                        </div>

                        {/* Suggested Read Title */}
                        <h2 className="text-[12px] font-bold mb-2">
                            {read.title}
                        </h2>
                    </div>
                </li>
            </Link>
        ))
    )
}

export default SuggestedReadList;