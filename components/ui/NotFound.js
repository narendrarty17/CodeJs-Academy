import React from 'react';

const NotFound = ({ message }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
                <p className="mt-4 text-white">
                    Error: {message}
                </p>
            </div>
        </div>
    );
};

export default NotFound;
