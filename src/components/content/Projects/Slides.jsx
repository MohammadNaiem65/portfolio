import { motion } from 'framer-motion';

export default function Slides({ images, currSlide }) {
    return images.map((image, index) => (
        <div key={index} className='min-w-[46rem] h-[22rem] p-2'>
            <motion.div
                className={`size-full rounded`}
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
