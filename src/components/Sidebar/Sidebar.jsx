import { useRef } from 'react';
import './Sidebar.css';

const LINKS = ['home', 'skills', 'projects', 'contact', 'hire me'];

export default function Sidebar({ showSidebar, setShowSidebar }) {
    const linksContainerRef = useRef(null);

    return (
        <section
            id='links-container'
            ref={linksContainerRef}
            className={`col-span-2 h-full sm:bg-transparent flex items-center justify-center absolute top-0 bottom-0 lg:relative lg:inset-0 z-[900] ${
                showSidebar ? 'right-0 left-0  ' : 'right-[175%] -left-[175%]'
            }`}
        >
            <div
                id='links'
                className='w-fit text-5xl uppercase font-bold text-white flex flex-col gap-y-3 relative z-10'
            >
                {LINKS.map((link, index) => (
                    <a
                        key={index}
                        className='link title w-fit'
                        href={`#${link === 'hire me' ? 'hire-me' : link}`}
                        onMouseOver={() =>
                            (linksContainerRef.current.dataset.index = index)
                        }
                        onClick={() => setShowSidebar(false)}
                    >
                        {link}
                    </a>
                ))}
            </div>

            <div id='patterns' className='absolute inset-0 -z-0' />
        </section>
    );
}
