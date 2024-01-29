import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
    const darkerBlueColor = '#2563EB'; // Adjust this color to your preference

    const buttonVariant_01 = {
        hover: {
            backgroundColor: darkerBlueColor, // New background color on hover
            color: '#FFFFFF', // New text color on hover
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        // Main container for the footer with styling
        <motion.footer
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="overflow-hidden pt-10 pb-5 px-10 bg-gray-800"
        >
            {/* Top section with "Let's Connect" heading and enrollment button */}
            <div className="flex flex-col gap-3 items-center md:items-start md:flex-row justify-between">
                <div className="text-white text-3xl font-bold">
                    Lets Connect there
                </div>
                {/* Enrollment button with icon */}
                <motion.div
                    className="flex items-center px-3 pb-3 pt-1 md:px-6 md:w-[200px] md:h-[60px] font-medium rounded-full bg-blue-500 text-white text-xl"
                    whileHover="hover"
                    variants={buttonVariant_01}
                >
                    <Link href="/#courses">
                        <button className="flex justify-center items-center pl-3 pt-1.5 gap-1">
                            <p>Enroll Now</p>
                            <img
                                className="w-8"
                                src="/images/utils/footer/up-right-arrow.png"
                                alt="Up right arrow"
                            />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Horizontal line separator */}
            <div className="mt-20 w-full h-[2px] bg-gray-500" />

            {/* Middle section with company information and social media icons */}
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-10">
                <div className="flex flex-col gap-4">
                    {/* Company logo and name */}
                    <div className="flex items-center">
                        <img
                            src="/images/utils/footer/brandLogo.svg"
                            alt="Company Logo"
                            className="h-8 w-8 mr-2"
                        />
                        <span className="text-white text-2xl font-bold">CodeSamjho</span>
                    </div>
                    {/* Company description */}
                    <div className="hidden md:inline text-white max-w-xl">
                        At CodeJS, we take pride in being your premier destination for comprehensive
                        web development education. Our platform offers a meticulously curated array
                        of expert-led online courses, providing learners with an immersive and
                        transformative experience.
                    </div>
                    {/* Social media icons */}
                    <div className="flex gap-2">
                        <img src="/images/utils/footer/socialMediaIcons/facebook.svg" alt="Facebook" />
                        <img src="/images/utils/footer/socialMediaIcons/youtube.svg" alt="YouTube" />
                        <img src="/images/utils/footer/socialMediaIcons/whatsapp.svg" alt="WhatsApp" />
                        <img src="/images/utils/footer/socialMediaIcons/twitter.svg" alt="Twitter" />
                        <img src="/images/utils/footer/socialMediaIcons/instagram.svg" alt="Instagram" />
                    </div>
                </div>
                {/* Contact information section */}
                <div className="flex flex-col gap-3">
                    <header className="text-blue-500 font-bold">
                        Contact
                    </header>
                    <div className="text-white flex flex-col gap-2">
                        <div>+91-9919748714</div>
                        <div>narendrarty17@gmail.com</div>
                    </div>
                </div>
                {/* Navigation links section */}
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
                {/* Newsletter subscription section */}
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
                            <img src="/images/utils/footer/right-ar.svg" alt="Right arrow" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal line separator */}
            <div className="mt-10 w-full h-[2px] bg-gray-500" />

            {/* Copyright information */}
            <div className="flex flex-col items-center justify-center ml-auto text-white mt-10">
                Copyright@2023. All Rights Reserved.
            </div>
        </motion.footer>
    );
}

export default Footer;