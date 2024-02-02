import BlogPage from '@/components/Blogs/BlogPage';
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';

const Blogs = ({ blogId }) => {
    return (
        <div className='font-poppins bg-gray-900 text-white'>
            <Header />
            <BlogPage blogId={blogId} />
            <Footer />
        </div>
    );
}

export default Blogs;