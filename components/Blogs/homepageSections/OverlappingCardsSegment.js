import OverlappingCard from "@/components/Blogs/cards/OverlappingCard";
import List from "@/blogData/learning/index.json";
import Link from "next/link";
import { baseUrl } from '@/components/Blogs/basePath';

const OverlappingCardSegment = ({ type, place }) => {
    const numIterations = place == 'segmenthome' ? 6 : 3;
    const url = place == 'segmenthome' ? `/articleslist?type=${type}` : '/learninghome';

    const cardComponents = [];
    for (let i = 1; i <= numIterations; i += 3) {
        cardComponents.push(
            <div key={i} className="flex flex-wrap flex-col gap-10 mr-[10px] items-center md:justify-between md:flex-row">
                <OverlappingCard id={i} type="learning" />
                <OverlappingCard id={i + 1} type="learning" />
                <OverlappingCard id={i + 2} type="learning" />
            </div>
        );
    }

    return (
        <div className="px-6 md:px-8 lg:px-20 flex flex-col itemx-center gap-8">
            <div className="flex gap-4 justify-center md:justify-start">
                <span className="bg-green-400 w-8 h-8 rounded-full" />
                <h1 className="text-2xl">Learning</h1>
            </div>
            {cardComponents}
            <Link href={`${baseUrl}${url}`}>
                <button className="text-lg border-2 border-white text-white py-3 px-6 rounded-full">
                    See More
                </button>
            </Link>
        </div>
    )
}

export default OverlappingCardSegment;