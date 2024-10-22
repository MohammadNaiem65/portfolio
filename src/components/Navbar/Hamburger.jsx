import bars from '../../assets/icons/bars.svg';
import cross from '../../assets/icons/cross.svg';

export default function Hamburger({
    showSidebar = false,
    setShowSidebar = () => {},
}) {
    return (
        <div className='lg:hidden'>
            <img
                src={showSidebar ? cross : bars}
                alt='hamburger'
                className='w-8 h-8 cursor-pointer'
                onClick={() => setShowSidebar((prev) => !prev)}
            />
        </div>
    );
}
