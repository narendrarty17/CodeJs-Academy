const CoreOfferings = () => {
    return (
        <div
            className="flex flex-col gap-6 items-center justify-center py-8"
        >
            <div className="flex flex-col items-center text-center px-8 gap-2">
                <h1 className="text-2xl font-bold">
                    COURSES, DELIVERED YOUR WAY.
                </h1>
                <p className="text-md text-center text-gray-400">The right access model for every learner.</p>
            </div>
            <div className="flex justify-center flex-wrap gap-3 md:gap-6 md:mx-10">
                <section className="flex items-center w-[325px] md:w-[400px] gap-5 bg-gray-800 rounded-md p-4">
                    <img
                        className="w-14 h-auto"
                        src="/images/landingPage/section_07/learnOnDemand.svg"
                    />
                    <div className="space-y-1">
                        <h1 className="text-xl font-bold">Learn On Demand</h1>
                        <p>
                            Learn at you own pace,
                            from anywhere in world
                        </p>
                    </div>
                </section>
                <section className="flex items-center w-[325px] md:w-[400px] gap-5 bg-gray-800 rounded-md p-4">
                    <img
                        className="w-14 h-auto"
                        src="/images/landingPage/section_07/expertGuidance.svg"
                    />
                    <div className="space-y-1">
                        <h1 className="text-xl font-bold">Expert Guidance</h1>
                        <p>
                            Learn everything from the best in the industry
                            experts
                        </p>
                    </div>
                </section>
                <section className="flex items-center w-[325px] md:w-[400px] gap-5 bg-gray-800 rounded-md p-4">
                    <img
                        className="w-14 h-auto"
                        src="/images/landingPage/section_07/certificate.svg"
                    />
                    <div className="space-y-1">
                        <h1 className="text-xl font-bold">Certificate on Completion</h1>
                        <p>
                            After completing the course, you'll receive a certificate.
                        </p>
                    </div>
                </section>
                <section className="flex items-center w-[325px] md:w-[400px] gap-5 bg-gray-800 rounded-md p-4">
                    <img
                        className="w-14 h-auto"
                        src="/images/landingPage/section_07/community.svg"
                    />
                    <div className="space-y-1">
                        <h1 className="text-xl font-bold">Closed Premium Community</h1>
                        <p>
                            Once enrolled in the course, get access to the premium CodeJs community.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default CoreOfferings;