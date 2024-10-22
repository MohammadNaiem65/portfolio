import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import brainiacToysImg from '../../../assets/projects/brainiac-toys.png';
import madChefImg from '../../../assets/projects/mad-chef.png';
import wildlifeCampImg from '../../../assets/projects/wildlife-camp.png';
import Slides from './Slides';
import SlideDetailsModal from './SlideDetailsModal';

const images = [
    {
        src: madChefImg,
        alt: 'mad-chef',
        title: 'Mad Chef',
        link: 'https://mad-chef.web.app/',
        clientRepo: 'https://github.com/MohammadNaiem65/mad-chef-client.git',
        serverRepo: 'https://github.com/MohammadNaiem65/mad-chef-server.git',
        overview:
            ' Mad Chef is a Recipe sharing website where Users (formally Students) and Chefs meet and share their expertise to help the Users to improve their cooking skills.',
    },
    {
        src: brainiacToysImg,
        alt: 'brainiac-toys',
        title: 'Brainiac Toys',
        link: 'https://brainiac-toys.web.app/',
        clientRepo:
            'https://github.com/MohammadNaiem65/brainiac-toys-client.git',
        serverRepo:
            'https://github.com/MohammadNaiem65/brainiac-toys-server.git',
        overview:
            'Brainiac Toys, an online toy store where users can buy their favorite toys.',
    },
    {
        src: wildlifeCampImg,
        alt: 'wildlife-camp',
        title: 'Wildlife Camp',
        link: 'https://wildlife-camp.web.app/',
        clientRepo:
            'https://github.com/MohammadNaiem65/wildLife-camp-client.git',
        serverRepo:
            'https://github.com/MohammadNaiem65/wildLife-camp-server.git',
        overview:
            'Wildlife Camp is a summer camping website where users can book their summer camping trips.',
    },
];

const AUTO_DELAY = 1000 * 4;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
    type: 'spring',
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export default function Projects() {
    const [selectedSlide, setSelectedSlide] = useState(null);
    const [currSlide, setCurrSlide] = useState(0);

    const dragX = useMotionValue(0);

    const handleSliding = () => {
        const dragged = dragX.get();

        if (dragged >= DRAG_BUFFER && currSlide >= 0) {
            setCurrSlide((prev) => (prev === 0 ? 0 : prev - 1));
        } else if (dragged <= -DRAG_BUFFER && currSlide <= images.length - 1) {
            setCurrSlide((prev) =>
                prev === images.length - 1 ? images.length - 1 : prev + 1
            );
        }
    };

    // Slider autoplay
    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setCurrSlide((pv) => {
                    if (pv === images.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(selectedSlide);

    return (
        <section
            id='projects'
            className='w-full h-dvh col-span-7 grid-cols-subgrid flex justify-center items-center'
        >
            <div className='w-[46rem] h-[26rem] relative'>
                <h3 className='title font-bold text-4xl mb-4'>
                    From Concept to Code
                    <span className='text-4xl text-sky-400 leading-3'>.</span>
                </h3>

                {/* Slides Container */}
                <div className='overflow-hidden'>
                    <motion.div
                        className='flex cursor-grab active:cursor-grabbing'
                        style={{
                            x: dragX,
                        }}
                        drag='x'
                        onDragEnd={handleSliding}
                        transition={SPRING_OPTIONS}
                        dragConstraints={{ right: 0, left: 0 }}
                        animate={{
                            translateX: `-${currSlide * 100}%`,
                        }}
                    >
                        <Slides images={images} currSlide={currSlide} />
                    </motion.div>
                    <button
                        className='w-fit mx-auto mt-10 mb-20 px-6 py-1 border-2 border-sky-400 font-semibold font-agdasima text-2xl text-sky-400 block rounded duration-300 hover:bg-sky-400 hover:text-white'
                        onClick={() => setSelectedSlide(currSlide)}
                    >
                        Details
                    </button>
                </div>

                {/* Controls */}
                <motion.span
                    className='size-10 inline-block absolute top-1/2 -left-12 bg-sky-50/10 hover:bg-sky-50/20 rounded-full cursor-pointer duration-300 before:content-[""] before:size-4 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/3 before:-rotate-[45deg] before:-translate-y-1/2 before:border-t-2 before:border-l-2 before:border-sky-400'
                    whileTap={{ scale: 0.85, transitionDuration: 0 }}
                    onClick={() =>
                        setCurrSlide((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                        )
                    }
                />
                <motion.span
                    className='size-10 inline-block absolute top-1/2 -right-12 bg-sky-50/10 hover:bg-sky-50/20 rounded-full cursor-pointer duration-300 before:content-[""] before:size-4 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-2/3 before:rotate-[135deg] before:-translate-y-1/2 before:border-t-2 before:border-l-2 before:border-sky-400'
                    whileTap={{ scale: 0.85, transitionDuration: 0 }}
                    onClick={() =>
                        setCurrSlide((prev) =>
                            prev === images.length - 1 ? 0 : prev + 1
                        )
                    }
                />

                {selectedSlide !== null && (
                    <SlideDetailsModal
                        layoutId={selectedSlide}
                        slideDetails={images[selectedSlide]}
                        setSelectedSlide={setSelectedSlide}
                    />
                )}
            </div>
        </section>
    );
}
