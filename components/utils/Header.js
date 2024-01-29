import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import linksList from '@/public/data/navLinkList.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginButton from '../Auth/Login';
import LogoutButton from '../Auth/Logout';

const Header = () => {
    // State to track the current active link
    const [activeLink, setActiveLink] = useState();
    const [showMenu, setShowMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    // for now I am setting isAuthenticated be true as auth0 is not working later I will find appropriate solutions
    // const { isAuthenticated } = useAuth0();
    const isAuthenticated = true;

    const router = useRouter();

    // If you only want the path without query parameters
    const currentPath = router.pathname;

    const toggleMenu = () => {
        setShowSidebar((prevShowSidebar) => !prevShowSidebar);
    };

    const settingActiveLinkByURL = () => {
        const currentLink = linksList.find(link => link.url === currentPath);

        if (currentLink) {
            setActiveLink(currentLink.link);
        }
    };

    const NavLink = ({ link, children, url }) => {
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
                    <span className="text-white text-lg font-bold">CodeSamjho</span>
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
                {/* For now I am hiding login and logout button as auth0 is not working for now */}
                {/* <div className="flex items-center mr-[-30px] md:mr-0 gap-3 md:gap-5">
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </div> */}

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
