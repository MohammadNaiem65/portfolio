import Hamburger from './Hamburger';

export default function Navbar({ showSidebar, setShowSidebar }) {
    return (
        <section className='h-20 py-4 pr-5 sm:pr-10 flex items-center justify-between fixed top-0 left-[5%]      lg:left-[23%] right-0 z-[999]'>
            <a href='#home' className='font-semibold text-2xl title'>
                Rifat Ahmed
                <span className='text-4xl text-sky-400 leading-3'>.</span>
            </a>

            <Hamburger
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
        </section>
    );
}
