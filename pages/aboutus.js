import Main from "@/components/AboutUs/Main";
import OurMission from "@/components/AboutUs/OurMission";
import OurStory from "@/components/AboutUs/OurStory";
import Footer from "@/components/utils/Footer";
import Header from "@/components/utils/Header";
import React from "react";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-20 px-4 py-10 md:mx-20">
                <Main />
                <OurMission />
                <OurStory />
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;