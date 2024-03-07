import Link from 'next/link';

const SocialMediaIcons = ({ links }) => (
    links.map((link, index) => (
        <Link key={index} href={link.src} className="text-blue-500">
            <img
                className='w-4 h-4'
                src={link.iconURL}
                alt={link.alt}
            />
        </Link>
    ))
);

export default SocialMediaIcons;