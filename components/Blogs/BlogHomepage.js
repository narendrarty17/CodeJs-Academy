import CareerAdvice from "./homeComponents/CareerAdvice";
import ReportSection from "./homeComponents/ReportSection";
import MainBlogSection from "./homeComponents/MainBlogSection";
import BlogHeader from "./homeComponents/BlogHeader";
import TopVideos from "./homeComponents/TopVideos";
import Newsletter from "./homeComponents/NewsLetter";

const BlogHomepage = () => {
    return (
        <div className="flex flex-col gap-10">
            <BlogHeader />
            <MainBlogSection />
            <ReportSection />
            <CareerAdvice />
            <TopVideos />
            <Newsletter />
        </div>
    );
}

export default BlogHomepage;