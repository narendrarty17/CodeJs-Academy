import CardHorizontal from "@/components/Blogs/cards/CardHorizontal";
import Link from 'next/link';
import { baseUrl } from '@/components/Blogs/basePath';

const DisplayCards = ({ type, place }) => {
    const numIterations = place == 'segmenthome' ? 8 : 4;
    const url = place == 'segmenthome' ? `/articleslist?type=${type}` : '/careerhome';

    const cardComponents = [];
    for (let i = 1; i <= numIterations - 1; i += 2) {
        cardComponents.push(
            <div key={i} className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
                <CardHorizontal id={i} type="careerAdvice" />
                <CardHorizontal id={i + 1} type="careerAdvice" />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-8 md:gap-10 mt-8">
            {cardComponents}
            <Link href={`${baseUrl}${url}`}>
                <button className="text-lg border-2 border-white text-white py-3 px-6 rounded-full">
                    See More
                </button>
            </Link>
        </div>
    )
}

const HorizontalCardSegment = ({ type, place }) => {
    return (
        <div className="px-8 md:px-20 mb-20">
            <div className="flex gap-4 items-center">
                <span className="bg-green-400 w-8 h-8 rounded-full" />
                <h1 className="text-2xl">Career Advice</h1>
            </div>
            <DisplayCards type={type} place={place} />
        </div>
    );
}

export default HorizontalCardSegment;