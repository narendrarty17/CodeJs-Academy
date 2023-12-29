import Header from '../components/Header';
import Section_01 from '@/components/Section_01';
import Section_02 from '@/components/Section_02';
import Section_03 from '@/components/Section_03';
import Section_04 from '@/components/Section_04';
import Section_05 from '@/components/Section_05';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Section_05 />
      <Footer />
    </div>
  )
}
