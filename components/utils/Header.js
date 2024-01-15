import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import linksList from '@/public/data/navLinkList.json';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ link, activeLink, children, url }) => {
    return (
        <Link
            href={url}
            style={{ display: 'block' }}
            className={`text-white hover:text-gray-300 ${activeLink === link ? 'underline' : ''}`}
        >
            {children}
        </Link>
    );
};


const Sidebar = ({ linksList, activeLink }) => {
    return (
        <aside className="absolute flex flex-col items-center bg-blue-500 text-white p-4 right-0 w-1/2 h-auto overflow-y-auto z-10">
            {/* Sidebar content */}
            <nav className="space-y-4">
                {linksList.map((link, index) => (
                    <NavLink
                        key={index}
                        link={link.link}
                        activeLink={activeLink}
                        url={link.url}
                    >
                        {link.linkText}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

NavLink.propTypes = {
    link: PropTypes.string.isRequired,
    activeLink: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

Sidebar.propTypes = {
    activeLink: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func.isRequired,
};

const Header = () => {
    // State to track the current active link
    const [activeLink, setActiveLink] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const router = useRouter();

    // If you only want the path without query parameters
    const currentPath = router.pathname;

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleMenu = () => {
        setShowSidebar((prevShowSidebar) => !prevShowSidebar);
    };

    const settingActiveLinkByURL = () => {
        // Setting active link as per as the url
        if (currentPath === '/') {
            setActiveLink('home')
        }
    }

    useEffect(() => {
        settingActiveLinkByURL();

        const handleResize = () => {
            // Set showMenu to true when screen size is below md breakpoint
            setShowMenu(window.innerWidth < 768); // 768px is the md breakpoint
            setShowSidebar(window.innerWidth < 768 && showSidebar);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check on mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showSidebar]);

    return (
        <div>
            <header className="bg-blue-500 p-4 flex justify-between items-center">
                {/* Company Logo with Name (Left Section) */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/images/utils/header/brandLogo.svg"
                        alt="Company Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <span className="text-white text-lg font-bold">CodeJS</span>
                </Link>

                {/* Navigation Links (Middle Section) */}
                <nav className="flex justify-center space-x-4">
                    {/* Navigation Links Only show in big screens */}
                    {!showMenu && (
                        <>
                            {linksList
                                .map((link, index) => (
                                    <NavLink
                                        key={index}
                                        link={link.link}
                                        activeLink={activeLink}
                                        url={link.url}
                                    >{link.linkText}</NavLink>
                                ))}
                        </>
                    )}
                </nav>

                {/* Login and Signup Button (Right Section) */}
                <div className="flex items-center">
                    <Link
                        onClick={() => handleLinkClick(null)}
                        href="/signin"
                    >
                        <button className="text-white hover:text-gray-300 mr-4">
                            Login
                        </button>
                    </Link>
                    <Link
                        onClick={() => handleLinkClick(null)}
                        href="/signup"
                    >
                        <button className="bg-gray-600 text-blue-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* Menu for Sidebar Only show on small screens */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    <img src="/images/utils/header/menu.svg" alt="Menu" className="h-6 w-6" />
                </button>
            </header >


            {/* Sidebar */}
            {
                showSidebar && (
                    <Sidebar
                        linksList={linksList}
                        activeLink={activeLink}
                    />
                )
            }
        </div >
    );
};

export default Header;
