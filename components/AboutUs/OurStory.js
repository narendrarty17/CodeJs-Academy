import React from "react";

const OurStory = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row gap-6 items-center">
            <div className="max-w-lg flex flex-col gap-2">
                <h1 className="text-3xl font-bold">
                    Our Story
                </h1>
                <p className="text-lg">
                    In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
                    <br />
                    Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.
                </p>
            </div>
            <img
                className="md:max-w-lg"
                src="/images/about/our_story.webp"
            />
        </div>
    );
}

export default OurStory;