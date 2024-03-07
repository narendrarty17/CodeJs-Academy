import Report from "@/components/Blogs/homepageSections/Report";
import MainBlogSection from "./homeComponents/MainBlogSection";
import BlogHeader from "./homeComponents/BlogHeader";
import Newsletter from "@/components/Blogs/homepageSections/NewsLetter";
import HorizontalCardSegment from "@/components/Blogs/homepageSections/HorizontalCardsSegment";
import VideoCardSegment from "@/components/Blogs/homepageSections/VideoCardsSegment";
import OverlappingCardSegment from "@/components/Blogs/homepageSections/OverlappingCardsSegment";

const BlogHomepage = () => {
    return (
        <div className="flex flex-col gap-14">
            <BlogHeader />
            <MainBlogSection />
            <Report />
            <HorizontalCardSegment type="careerAdvice" place="home" />
            <VideoCardSegment />
            <OverlappingCardSegment type="learning" />
            <Newsletter />
        </div>
    );
}

export default BlogHomepage;