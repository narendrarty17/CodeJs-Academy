import Link from "next/link";

const BigBlogCard = () => {
    return (
        <div className="flex flex-col gap-4">
            <Link href="/blog?blogId=1">
                <div className="max-w-lg mx-auto">
                    {/* Image Section */}
                    <div className="mb-2">
                        <img
                            className="w-full h-56 object-cover"
                            src="/images/blogs/blog/blog_01/blogIcon.png"
                            alt="Blog Image"
                        />
                    </div>

                    {/* Category Section */}
                    <div className="mb-1 text-gray-400">
                        Programming
                    </div>

                    {/* Title Section */}
                    <h3 className="text-2xl pb-2">
                        Use of VR to display websites in 3D
                    </h3>
                    <p className="text-gray-300 pb-4">
                        The modern career requires a development plan to match.
                        Discover how the 360-Degree Career Framework
                        can assist multidimensional growth that delivers a more
                        balanced and fulfilling career.
                    </p>
                </div>
            </Link>
            <button className="text-lg bg-blue-500 text-white py-3 px-3 w-32 rounded-full">
                Read me
            </button>
        </div>
    );
}

export default BigBlogCard;