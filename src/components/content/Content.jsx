import Contact from './Contact';
import HireMe from './HireMe';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects/Projects';

export default function Content() {
    return (
        <section className='col-span-7 lg:col-span-5 h-dvh p-6 sm:p-20 md:p-36 lg:p-0 overflow-hidden grid grid-cols-7'>
            <Home />
            <Skills />
            <Projects />
            <Contact />
            <HireMe />
        </section>
    );
}
