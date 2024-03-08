import React from "react";

const OurMission = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row gap-6 items-center">
            <img
                className="md:max-w-lg"
                src="/images/about/our_mission.webp"
            />
            <div className="max-w-lg flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Our Mission: Empower people with the power of web technologies</h1>
                <p className="text-lg">
                    We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
                </p>
            </div>
        </div>
    );
}

export default OurMission;