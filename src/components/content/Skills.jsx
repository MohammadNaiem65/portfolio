import jsImg from '../../assets/javascript.png';
import reactImg from '../../assets/react.png';
import tailwindImg from '../../assets/tailwind.png';
import framerMotionImg from '../../assets/framer-motion.svg';
import reduxImg from '../../assets/redux.svg';
import firebaseImg from '../../assets/firebase.svg';
import nodeImg from '../../assets/node.png';
import expressImg from '../../assets/express.png';
import mongodbImg from '../../assets/mongodb.svg';
import mongooseImg from '../../assets/mongoose.svg';
import gitImg from '../../assets/git.svg';
import githubImg from '../../assets/github.svg';

const IMAGES = [
    {
        src: jsImg,
        alt: 'javascript',
    },
    {
        src: reactImg,
        alt: 'react',
    },
    {
        src: tailwindImg,
        alt: 'tailwind',
    },
    {
        src: framerMotionImg,
        alt: 'framer motion',
    },
    {
        src: reduxImg,
        alt: 'redux',
    },
    {
        src: firebaseImg,
        alt: 'firebase',
    },
    {
        src: nodeImg,
        alt: 'node',
    },
    {
        src: expressImg,
        alt: 'express',
    },
    {
        src: mongodbImg,
        alt: 'mongodb',
    },
    {
        src: mongooseImg,
        alt: 'mongoose',
    },
    {
        src: gitImg,
        alt: 'git',
    },
    {
        src: githubImg,
        alt: 'github',
    },
];

export default function Skills() {
    return (
        <section
            id='skills'
            className='w-full h-dvh col-span-7 grid-cols-subgrid flex justify-center items-center'
        >
            <div className='w-[46rem] h-[26rem]'>
                <h3 className='title font-bold text-4xl'>
                    My Core Skills
                    <span className='text-4xl text-sky-400 leading-3'>.</span>
                </h3>

                <section className='w-full mt-8 grid grid-cols-6 gap-3'>
                    {IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className='col-span-1 object-center p-2 font-agdasima text-2xl'
                        >
                            <img
                                src={image.src}
                                alt={`${image.alt} image`}
                                className='size-16 p-1 mx-auto object-contain brightness-125 contrast-125'
                            />
                            <p className='text-center capitalize'>
                                {image.alt}
                            </p>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}
