import { useState } from 'react';
import Hamburger from './Hamburger';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <section className='h-20 py-4 pr-10 flex items-center justify-between fixed top-0 left-[23%] right-0'>
            <h3 className='font-semibold text-2xl title'>
                Rifat Ahmed<span className='text-4xl text-sky-400 leading-3'>.</span>
            </h3>

            <Hamburger showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        </section>
    );
}
