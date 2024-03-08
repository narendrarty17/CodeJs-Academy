import Main from "@/components/AboutUs/Main";
import Footer from "@/components/utils/Footer";
import Header from "@/components/utils/Header";
import React from "react";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col px-4 py-10">
                <Main />
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;