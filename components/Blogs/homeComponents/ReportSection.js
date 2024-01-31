// src/components/SustainabilitySection.js

import React from 'react';

const ReportSection = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center mt-16 px-16 lg:px-0 max-w-3xl gap-8 lg:gap-16 mx-auto">
            <div className="text-content flex-1">
                <div className='max-w-xl ml-[-16px] lg:ml-[-25px] mb-3 flex justify-start items-center'>
                    <div className="text-xl bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full">Rep</div>
                    <div className='text-xl'>ort</div>
                </div>
                <h2 className="text-3xl mb-4">2021 Sustainability Report</h2>
                <p className="text-gray-300">Sustainability is transforming the way professionals live and work globally. Discover insights from almost 600 professionals across 65 countries about the meaning, changing perceptions, and expanding agendas of sustainability – and understand how sustainability will impact your skills, career, and business.</p>
            </div>
            <div className="image-content flex-1">
                <img className="max-w-full h-auto rounded-md" src="/images/blogs/bloghomepage/reportCover.png" alt="Sustainability Image" />
            </div>
        </section>
    );
};

export default ReportSection;
