import Header from '../components/Header';
import Section_01 from '@/components/Section_01';
import Section_02 from '@/components/Section_02';
import Section_03 from '@/components/Section_03';
import Section_04 from '@/components/Section_04';
import Section_05 from '@/components/Section_05';
import Section_06 from '@/components/Section_06';
import Footer from '@/components/footer';

const linksList = [
  {
    id: 0,
    link: 'home',
    linkText: "Home",
    url: "#",
    type: "normal"
  },
  {
    id: 1,
    link: 'about',
    linkText: "About Us",
    url: "#",
    type: "normal"
  },
  {
    id: 2,
    link: 'courses',
    linkText: "Courses",
    url: "#",
    type: "normal"
  },
  {
    id: 3,
    link: 'contact',
    linkText: "Contact",
    url: "#",
    type: "normal"
  },
  {
    id: 4,
    link: "login",
    linkText: "Login",
    url: "#",
    type: "auth"
  },
  {
    id: 5,
    link: "signup",
    linkText: "Sign Up",
    url: "#",
    type: "auth"
  }
];


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
