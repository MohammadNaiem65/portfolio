import { useState } from 'react';
import cv from '../../assets/cv/Rifat_Ahmed_Tusar_Resume.pdf';
import envelopeIcon from '../../assets/icons/envelope.svg';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

const links = [
    {
        src: linkedinIcon,
        alt: 'linkedin',
        href: 'https://www.linkedin.com/in/rifat-ahmed-tusar/',
    },
    {
        src: githubIcon,
        alt: 'github',
        href: 'https://github.com/MohammadNaiem65',
    },

    {
        src: whatsappIcon,
        alt: 'whatsapp',
        href: 'https://wa.me/+8801917201320',
    },
];

export default function HireMe() {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('ahmedrtusar71@gmail.com');
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (error) {
            console.error('Error copying to clipboard:', error);
        }
    };

    return (
        <section
            id='hire-me'
            className='w-full h-dvh col-span-7 grid-cols-subgrid flex justify-center items-center'
        >
            <div className='w-[46rem] h-[26rem] pt-14 lg:px-10 xl:px-0'>
                <h3 className='title font-bold text-4xl'>
                    Hire Me
                    <span className='text-4xl text-sky-400 leading-3'>.</span>
                </h3>

                <div className='mt-5 md:mt-10 paragraph text-xl'>
                    <p className='text-justify'>
                        If you believe my skills and experience align with your
                        organization&apos;s needs, I would be delighted to
                        discuss your requirements further. Please find my CV
                        attached. For additional information about my background
                        and accomplishments, please visit the links below.
                    </p>

                    <a
                        href={cv}
                        download
                        className='w-fit mx-auto my-10 px-6 py-2 border-2 border-sky-400 font-semibold text-2xl text-sky-400 block rounded duration-300 hover:bg-sky-400 hover:text-white'
                    >
                        Download CV
                    </a>

                    <div className='mt-5 flex justify-center gap-x-4'>
                        {links.map((link, index) => (
                            <a href={link.href} target='_blank' key={index}>
                                <img
                                    src={link.src}
                                    className='w-8 h-8'
                                    alt={link.alt}
                                />
                            </a>
                        ))}

                        <button title='Copy email' onClick={copyToClipboard}>
                            <img src={envelopeIcon} className='size-8' />
                        </button>
                    </div>

                    <p
                        className={`w-fit mx-auto mt-3 px-3 border-2 border-sky-400 text-sky-400 rounded-tl-md rounded-b-md ${
                            isCopied ? 'block' : 'hidden'
                        }`}
                    >
                        Email Copied
                    </p>
                </div>
            </div>
        </section>
    );
}
