import Header from '@/components/utils/Header';
import Section_01 from '@/components/LandingPage/Section_01';
import Section_02 from '@/components/LandingPage/Section_02';
import Section_03 from '@/components/LandingPage/Section_03';
import Section_04 from '@/components/LandingPage/Section_04';
import Section_05 from '@/components/LandingPage/Section_05';
import Section_06 from '@/components/LandingPage/Section_06';
import Footer from '@/components/utils/Footer';

import linksList from '@/public/data/linksList.json';

export default function Home() {
  return (
    <div>
      <Header linksList={linksList} />
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Section_05 />
      <Section_06 />
      <Footer />
    </div>
  )
}
