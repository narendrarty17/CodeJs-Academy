{/* Importing utils Components */ }
import Header from '@/components/utils/Header';
import Footer from '@/components/utils/Footer';

{/* Importing LandingPage Components */ }
import Intro from '@/components/LandingPage/01_Intro';
import OurRecruiters from '@/components/LandingPage/02_OurRecruiters';
import Courses from '@/components/LandingPage/04_Courses';
import Reviews from '@/components/LandingPage/05_Reviews';
import Instructors from '@/components/LandingPage/06_Instructors';
import CoreOfferings from '@/components/LandingPage/07_CoreOfferings';

export default function Home() {
  return (
    <div className="font-poppins bg-gray-900 text-white">
      <Header />
      <Intro />
      <OurRecruiters />
      <Courses />
      <CoreOfferings />
      <Reviews />
      <Instructors />
      <Footer />
    </div>
  )
}
