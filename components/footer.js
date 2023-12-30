const footer = () => {
    return (
        <footer className="overflow-hidden pt-10 pb-5 px-10 bg-gray-900">
            <div className="flex flex-col gap-3 items-center md:items-start md:flex-row justify-between">
                <div className="text-white text-3xl font-bold">
                    Lets Connect there
                </div>
                <div className="px-6 py-2 w-[200px] h-[60px] font-medium rounded-full bg-blue-500 text-white text-xl">
                    <button className="flex justify-center items-center pl-3 pt-1.5 gap-1">
                        <p>Enroll Now</p>
                        <img
                            className="w-8"
                            src="/images/footer/up-right-arrow.png"
                        />
                    </button>
                </div>
            </div>
            <div className="mt-20 w-full h-[2px] bg-gray-500" />
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-10">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        <img
                            src="/images/header/brandLogo.svg"
                            alt="Company Logo"
                            className="h-8 w-8 mr-2"
                        />
                        <span className="text-white text-2xl font-bold">CodeJS</span>
                    </div>
                    <div className="hidden md:inline text-white max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
                        interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                    </div>
                    <div className="flex gap-2">
                        <img src="/images/footer/socialMediaIcons/facebook.svg" />
                        <img src="/images/footer/socialMediaIcons/youtube.svg" />
                        <img src="/images/footer/socialMediaIcons/whatsapp.svg" />
                        <img src="/images/footer/socialMediaIcons/twitter.svg" />
                        <img src="/images/footer/socialMediaIcons/instagram.svg" />
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                    <header className="text-blue-500 font-bold">
                        Navigation
                    </header>
                    <div className="text-white flex flex-col gap-2">
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Service</div>
                        <div>Resume</div>
                        <div>Project</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <header className="text-blue-500 font-bold">
                        Contact
                    </header>
                    <div className="text-white flex flex-col gap-2">
                        <div>+91-9919748714</div>
                        <div>narendrarty17@gmail.com</div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                    <div className="text-blue-500 font-bold">
                        Get the latest information
                    </div>
                    <div className="flex">
                        <input
                            className="rounded-l-lg pl-2 h-8"
                            placeholder="Email Address"
                        />
                        <div className="flex justify-center items-center bg-blue-500 w-10 h-8 rounded-r-lg">
                            <img src="images/footer/right-ar.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full h-[2px] bg-gray-500" />
            <div className="flex flex-col items-center justify-center ml-auto text-white mt-10">
                Copyright@2023. All Rights Reserved.
            </div>
        </footer>
    );
}

export default footer;