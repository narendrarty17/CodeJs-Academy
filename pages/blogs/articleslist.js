import { LatestArticles } from '@/components/Blogs/articleList/LatestArticles'
import { PopularArticles } from '@/components/Blogs/articleList/PopularArticles'
import SegmentHeader from '@/components/Blogs/segmentHome/header'
import Footer from '@/components/utils/Footer'
import Header from '@/components/utils/Header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const Articleslist = () => {
    const router = useRouter();
    const [type, setType] = useState();

    useEffect(() => {
        if (router.query['type']) {
            setType(router.query['type'] || null);
            console.log("type inside articleslist: ", type);
        }
    }, [router.query['type']])

    return (
        <div>
            <Header />
            {type && (
                <div>
                    <SegmentHeader title="Latest Articles" />
                    <div className='flex flex-col gap-12 w-full md:gap-20 my-12 md:flex-row justify-center px-8'>
                        <LatestArticles type={type} />
                        <PopularArticles type={type} />
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}
export default Articleslist;