import { motion } from 'framer-motion';

export default function Slides({ images, currSlide }) {
    return images.map((image, index) => (
        <div
            key={index}
            className='min-w-full md:w-[40rem] lg:w-[46rem] h-[16rem] md:h-[20rem] lg:h-[22rem] lg:p-2'
        >
            <motion.div
                className='size-full rounded'
                style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                animate={{
                    scale: index === currSlide ? 1 : 0.9,
                }}
                layoutId={index + 1}
            />
        </div>
    ));
}
