import { useState } from 'react';
import Hamburger from './Hamburger';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <section className='h-20 py-4 pr-10 flex items-center justify-between fixed top-0 left-[23%] right-0'>
            <h3 className='font-semibold text-2xl title'>Rifat Ahmed</h3>

            <Hamburger showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        </section>
    );
}
