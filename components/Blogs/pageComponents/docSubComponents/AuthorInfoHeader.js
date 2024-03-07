import SocialMediaIcons from "./SocialMediaIcons";
import { BlogImgsBaseDir } from '@/components/Blogs/basePath';

const AuthorInfoHeader = ({ author }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            {/* Author Info */}
            <div className="flex items-center">
                <img
                    src={`${BlogImgsBaseDir}/authorImgs/${author.image}`}
                    alt="Author Logo"
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-sm font-bold">
                        {author.name}
                    </h2>
                    <p className="text-[12px] text-gray-500">
                        {author.publicationDate}
                    </p>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
                {/* Add your social media icons and links here */}
                <SocialMediaIcons links={author.socialMediaLinks} />
            </div>
        </div>
    );
}

export default AuthorInfoHeader;