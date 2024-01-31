import CareerAdvice from "./homeComponents/CareerAdvice";
import ReportSection from "./homeComponents/ReportSection";
import MainBlogSection from "./homeComponents/MainBlogSection";
import BlogHeader from "./homeComponents/BlogHeader";
import TopVideos from "./homeComponents/TopVideos";

const BlogHomepage = () => {
    return (
        <div>
            <BlogHeader />
            <MainBlogSection />
            <ReportSection />
            {/* <CareerAdvice />
            <TopVideos /> */}
        </div>
    );
}

export default BlogHomepage;