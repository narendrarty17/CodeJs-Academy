// TailwindStyledLogin.js
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';
import React, { useState } from 'react';

const SignUp = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleUsernameFocus = () => {
        setUsernameFocused((prevUsernameFocused) => !prevUsernameFocused);
    }

    const handleUsernameBlur = () => {
        setUsernameFocused((prevUsernameFocused) => !prevUsernameFocused);
    }

    const handlePasswordFocus = () => {
        setPasswordFocused((prevPasswordFocused) => !prevPasswordFocused);
    }

    const handlePasswordBlur = () => {
        setPasswordFocused((prevPasswordFocused) => !prevPasswordFocused);
    }

    const handleRememberMeChange = () => {
        setRememberMe((prevRememberMe) => !prevRememberMe);
    };

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center space-x-40 mx-8 mt-20 mb-40 bg-black">
                <div className="w-96">
                    <div className="mb-8">
                        <div className="text-xl font-bold">WELCOME BACK!</div>
                        <div className="text-gray-500">
                            Don’t have an account,
                            <b className="text-blue-700"> Sign up</b>
                        </div>
                    </div>

                    <div className="mb-4 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <div className="text-white">Username</div>
                            <input
                                className={`border-2 rounded-md p-2 text-black ${usernameFocused ? 'border-blue-300' : 'border-gray-300'}`}
                                name="username"
                                placeholder="deniel123@gmail.com"
                                type="email"
                                onFocus={handleUsernameFocus}
                                onBlur={handleUsernameBlur}
                                style={{ outline: 'none' }} // Remove default focus
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="text-white">Password</div>
                            <input
                                className={`border-2 rounded-md p-2 text-black ${passwordFocused ? 'border-blue-300' : 'border-gray-300'}`}
                                name="password"
                                placeholder="**********"
                                type="password"
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                                style={{ outline: 'none' }} // Remove default focus
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className="text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-500">
                                Remember me
                            </label>
                        </div>
                        <div className="text-blue-700 cursor-pointer">Forget password?</div>
                    </div>

                    <button className="mt-4 bg-blue-700 text-white font-semibold py-2 rounded-md w-full">
                        Sign In
                    </button>

                    <div className="mt-6 flex items-center space-x-4">
                        <div className="border-t border-gray-300 flex-1"></div>
                        <div className="text-gray-500">or continue with</div>
                        <div className="border-t border-gray-300 flex-1"></div>
                    </div>

                    <div className="flex justify-between mx-10 mt-4">
                        <div className="border-2 border-blue-300 rounded-md px-4 py-2">
                            <img className="w-8 h-8" alt="" src="/images/signup/01_google.svg" />
                        </div>
                        <div className="border-2 border-blue-300 rounded-md px-4 py-2">
                            <img className="w-8 h-8" alt="" src="/images/signup/02_facebook.svg" />
                        </div>
                        <div className="border-2 border-blue-300 rounded-md px-4 py-2">
                            <img className="w-8 h-8" alt="" src="/images/signup/03_apple.svg" />
                        </div>
                    </div>
                </div>
                <img
                    className="hidden lg:flex w-[550px] h-auto object-cover"
                    alt=""
                    src="/images/signup/web_development.png"
                />
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
