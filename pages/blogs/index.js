import { Inter } from 'next/font/google'
import Header from '@/components/utils/Header'
import Footer from '@/components/utils/Footer'
import BlogsHome from '@/components/Blogs/BlogsHome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-900 text-white'>
      <Header />
      <BlogsHome />
      <Footer />
    </div>
  )
}
