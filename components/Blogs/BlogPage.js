// BlogPage.js
import React, { useState, useEffect } from 'react';

import { IsSmallScreenContext } from './pageComponents/Context';
// import IsSmallScreenContext from './pageComponents/IsSmallScreenContext';
import DocDisplay from './pageComponents/DocDisplay';

const BlogPage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen]);

    return (
        <IsSmallScreenContext.Provider value={isSmallScreen} >
            <DocDisplay />
        </IsSmallScreenContext.Provider>
    )
};

export default BlogPage;
