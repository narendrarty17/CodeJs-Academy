import React from 'react';

const Section_02 = () => {
    return (
        <section className="bg-gray-800 p-8">
            <div className="flex flex-col items-center md:flex-row md:justify-center container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Trusted by 2000+ companies worldwide.</h2>

                {/* Image container */}
                <div className="flex items-center w-full md:flex-row md:items-start md:justify-center md:w-[80%] overflow-hidden">
                    {/* Company logos */}
                    <img
                        src="/images/section_02/company_01.png"
                        alt="Company 01"
                        className="h-16 w-32 md:w-auto mb-4 md:mb-0 md:mr-4"
                    />
                    <img
                        src="/images/section_02/company_02.png"
                        alt="Company 02"
                        className="h-16 w-32 md:w-auto mb-4 md:mb-0 md:mr-4"
                    />
                    <img
                        src="/images/section_02/company_03.png"
                        alt="Company 03"
                        className="h-16 w-32 md:w-auto mb-4 md:mb-0 md:mr-4"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section_02;