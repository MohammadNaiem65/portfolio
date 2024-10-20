import Contact from './Contact';
import HireMe from './HireMe';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';

export default function Content() {
    return (
        <section className='h-dvh col-span-5 overflow-hidden grid grid-cols-7'>
            <Home />
            <Skills />
            <Projects />
            <Contact />
            <HireMe />
        </section>
    );
}
