/* eslint-disable react/prop-types */
import bars from '../../assets/icons/bars.svg';
import cross from '../../assets/icons/cross.svg';

export default function Hamburger({
    showNavbar = false,
    setShowNavbar = () => {},
}) {
    return (
        <div className='lg:hidden'>
            <img
                src={showNavbar ? cross : bars}
                alt='hamburger'
                className='w-8 h-8 cursor-pointer'
                onClick={() => setShowNavbar((prev) => !prev)}
            />
        </div>
    );
}
