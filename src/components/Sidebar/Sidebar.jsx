import { useRef } from 'react';
import './Sidebar.css';

const LINKS = ['home', 'profile', 'projects', 'contact', 'hire me'];

export default function Sidebar() {
    const linksContainerRef = useRef(null);

    return (
        <section
            id='links-container'
            ref={linksContainerRef}
            className='col-span-2 h-full flex items-center justify-center relative'
        >
            <div
                id='links'
                className='w-fit text-5xl uppercase font-bold text-white flex flex-col gap-y-3 relative z-10'
            >
                {LINKS.map((link, index) => (
                    <a
                        key={index}
                        className='link w-fit'
                        href={`#${link === 'hire me' ? 'hire-me' : link}`}
                        onMouseOver={() =>
                            (linksContainerRef.current.dataset.index = index)
                        }
                    >
                        {link}
                    </a>
                ))}
            </div>

            <div id='patterns' className='absolute inset-0 -z-0' />
        </section>
    );
}
