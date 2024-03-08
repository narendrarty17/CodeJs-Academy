import Link from 'next/link';

const SocialMediaIcons = ({ links }) => {
    return (
        <div className='flex items-center space-x-4'>
            <Link href={links.facebook} className='text-blue-500'>
                <img
                    className='w-4 h-4'
                    src="/images/blogs/blogpage/socialMedia/facebook.svg"
                    alt="facebook"
                />
            </Link>
            <Link href={links.linkedin} className='text-blue-500'>
                <img
                    className='w-4 h-4'
                    src="/images/blogs/blogpage/socialMedia/linkedin.svg"
                    alt="linkedin"
                />
            </Link>
            <Link href={links.twitter} className='text-blue-500'>
                <img
                    className='w-4 h-4'
                    src="/images/blogs/blogpage/socialMedia/twitter.svg"
                    alt="linkedin"
                />
            </Link>
        </div>
    );
};

export default SocialMediaIcons;