// NewsletterSection.js
import Link from 'next/link';
import React from 'react';

const Newsletter = () => {
    return (
        <div className="flex justify-center">
            <div className="px-10 pb-10 md:flex flex-col gap-10 md:gap-16 md:flex-row md:items-start md:justify-between">
                {/* Left Section */}
                <div className="max-w-md mb-4 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-2">Sign up to our newsletter</h2>
                    <p className="text-md text-gray-300">
                        Stay updated with our latest blogs and news by subscribing to our newsletter.
                    </p>
                </div>

                {/* Right Section - Form */}
                <div className="md:w-1/2">
                    <form className="flex flex-col">
                        <div className="italic text-sm text-gray-400 mb-3">* Required Fields</div>
                        <div className="max-w-md mb-4 flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First name *"
                                className="w-full md:w-1/2 bg-transparent border-b border-gray-500 py-3"
                            />
                            <input
                                type="text"
                                placeholder="Last name *"
                                className="w-full md:w-1/2 bg-transparent border-b border-gray-500 py-3"
                            />
                        </div>
                        <div className="max-w-md">
                            <input
                                type="email"
                                placeholder="Email *"
                                className="bg-transparent border-b border-gray-500 py-2 w-full py-3"
                            />
                        </div>
                        <div className="max-w-lg italic text-[10px] text-gray-400 py-5">
                            By consenting to receive communications, you agree to the use of
                            your data as described in our
                            <a className="text-blue-500 underline">
                                privacy policy
                            </a>.
                            You may opt out of receiving communications at any time.
                        </div>
                        <button
                            type="submit"
                            className="w-32 bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
