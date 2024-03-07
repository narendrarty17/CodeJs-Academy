import React from 'react'

import SegmentMainArticle from '@/components/Blogs/segmentHome/mainArticle';
import SegmentHeader from '@/components/Blogs/segmentHome/header';
import Newsletter from '@/components/Blogs/homepageSections/NewsLetter';
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';
import OverlappingCardSegment from '@/components/Blogs/homepageSections/OverlappingCardsSegment';

export const LearningHome = () => {
    return (
        <>
            <Header />
            <div div className="flex flex-col gap-14 mb-12">
                <SegmentHeader title="Learning" />
                <SegmentMainArticle type="learning" id={0} />
                <OverlappingCardSegment type="learning" place="segmenthome" />
                {/* <Newsletter /> */}
            </div>
            <Footer />
        </>
    )
};

export default LearningHome;
