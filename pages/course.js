import Header from '@/components/utils/Header';
import Section_01 from '@/components/Courses/Course/Section_01';
import Footer from '@/components/utils/Footer';

import linksList from '@/public/data/linksList.json';

export default function Course() {
    return (
        <div>
            <Header linksList={linksList} />
            <Section_01 />
            <Footer />
        </div>
    )
}
