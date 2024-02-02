import BlogHomepage from "@/components/Blogs/BlogHomepage";
import Footer from "@/components/utils/Footer";
import Header from "@/components/utils/Header";

const BlogHome = () => {
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <BlogHomepage />
            <Footer />
        </div>
    )
};

export default BlogHome;