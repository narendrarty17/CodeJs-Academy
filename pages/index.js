{/* Importing utils Components */ }
import Header from '@/components/utils/Header';
import Footer from '@/components/utils/Footer';

{/* Importing LandingPage Components */ }
import Intro from '@/components/LandingPage/01_Intro';
import OurRecruiters from '@/components/LandingPage/02_OurRecruiters';
import DiscoverCourses from '@/components/LandingPage/03_DiscoverCourses';
import Courses from '@/components/LandingPage/04_Courses';
import Reviews from '@/components/LandingPage/05_Reviews';
import Instructors from '@/components/LandingPage/06_Instructors';


export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <OurRecruiters />
      <DiscoverCourses />
      <Courses />
      <Reviews />
      <Instructors />
      <Footer />
    </div>
  )
}
