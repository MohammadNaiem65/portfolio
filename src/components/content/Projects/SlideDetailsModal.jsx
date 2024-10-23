import { motion } from 'framer-motion';
import crossImg from '../../../assets/icons/cross-dark.png';

export default function SlideDetailsModal({
    layoutId,
    slideDetails,
    setSelectedSlide,
}) {
    const { src, alt, title, overview, link, clientRepo, serverRepo } =
        slideDetails || {};

    return (
        <section
            className='bg-gray-900/90 flex justify-center items-center fixed inset-0 cursor-pointer z-50'
            onClick={() => setSelectedSlide(null)}
        >
            <section
                className='w-[46rem] h-[25rem] relative'
                onClick={(e) => e.stopPropagation()}
            >
                <motion.img src={src} alt={alt} layoutId={layoutId + 1} />

                <div className='absolute top-4 right-4'>
                    <img
                        src={crossImg}
                        alt='cross'
                        className='size-4 md:size-6 cursor-pointer'
                        onClick={() => setSelectedSlide(null)}
                    />
                </div>

                <div className='h-14 mt-4 px-4 font-agdasima text-lg grid grid-cols-3'>
                    <h3 className='col-span-1 self-center text-3xl'>{title}</h3>

                    <div className='col-span-2 self-end md:self-center ml-auto'>
                        <a
                            href={link}
                            target='_blank'
                            className='w-fit mb-20 md:px-6 md:py-1 md:border-2 border-sky-400 font-normal md:font-semibold font-agdasima text-lg md:text-2xl text-sky-400 rounded duration-300 hover:bg-sky-400 hover:text-white'
                        >
                            Live Link
                        </a>
                        <a
                            href={clientRepo}
                            target='_blank'
                            className='w-fit mx-3 mb-20 md:px-6 md:py-1 md:border-2 border-sky-400 font-normal md:font-semibold font-agdasima text-lg md:text-2xl text-sky-400 rounded duration-300 hover:bg-sky-400 hover:text-white'
                        >
                            Client Repo
                        </a>
                        <a
                            href={serverRepo}
                            target='_blank'
                            className='w-fit mb-20 md:px-6 md:py-1 md:border-2 border-sky-400 font-normal md:font-semibold font-agdasima text-lg md:text-2xl text-sky-400 rounded duration-300 hover:bg-sky-400 hover:text-white'
                        >
                            Server Repo
                        </a>
                    </div>

                    <p className='col-span-3 mt-[.8rem]'>{overview}</p>
                </div>
            </section>
        </section>
    );
}
