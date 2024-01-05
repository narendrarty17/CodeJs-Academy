import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ link, type, activeLink, onClick, children, url }) => {
    return (
        <a
            href={url}
            style={{ display: 'block' }}
            className={`text-white hover:text-gray-300 
                        ${activeLink === link ? 'underline' : ''}
                        ${type === 'auth' ? 'font-semibold' : ''}`
            }
            onClick={() => onClick(link)}
        >
            {children}
        </a>
    );
};


const Sidebar = ({ linksList, activeLink, onLinkClick }) => {
    return (
        <aside className="flex flex-col items-center bg-blue-500 text-white p-4 left-0 w-full h-auto overflow-y-auto z-10">
            {/* Sidebar content */}
            <nav className="space-y-4">
                {linksList.map((link) => (
                    <NavLink
                        link={link.link}
                        type={link.type}
                        activeLink={activeLink}
                        onClick={onLinkClick}
                        url={link.url}
                        key={link.id}
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

const Header = ({ linksList }) => {
    // State to track the current active link
    const [activeLink, setActiveLink] = useState('home');
    const [showMenu, setShowMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleMenu = () => {
        setShowSidebar((prevShowSidebar) => !prevShowSidebar);
    };

    useEffect(() => {
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
    }, []);

    return (
        <div>
            <header className="bg-blue-500 p-4 flex justify-between items-center">
                {/* Company Logo with Name (Left Section) */}
                <div className="flex items-center">
                    <img
                        src="/images/utils/header/brandLogo.svg"
                        alt="Company Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <span className="text-white text-lg font-bold">CodeJS</span>
                </div>

                {/* Navigation Links (Middle Section) */}
                <nav className="flex justify-center space-x-4">
                    {/* Menu for Sidebar Only show on small screens */}
                    <button
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        <img src="/images/utils/header/menu.svg" alt="Menu" className="h-6 w-6" />
                    </button>

                    {/* Navigation Links Only show in big screens */}
                    {!showMenu && (
                        <>
                            {linksList
                                .filter((link) => link.type != 'auth')
                                .map((link) => (
                                    <NavLink
                                        link={link.link}
                                        activeLink={activeLink}
                                        onClick={handleLinkClick}
                                        url={link.url}
                                    >{link.linkText}</NavLink>
                                ))}
                        </>
                    )}
                </nav>

                {/* Login and Signup Button (Right Section) */}
                <div className={`flex items-center ${showMenu ? 'hidden' : 'md:flex'}`}>
                    <button className="text-white hover:text-gray-300 mr-4">Login</button>
                    <button className="bg-gray-700 text-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Sign Up
                    </button>
                </div>
            </header>
            {/* Sidebar */}
            {showSidebar && (
                <Sidebar
                    linksList={linksList}
                    activeLink={activeLink}
                    onLinkClick={handleLinkClick}
                />
            )}
        </div>
    );
};

export default Header;
