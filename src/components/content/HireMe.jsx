import { useState } from 'react';
import cv from '../../assets/cv/Rifat_Ahmed_Tusar_CV.pdf';
import linkedinImg from '../../assets/linkedin.png';
import githubImg from '../../assets/github.svg';
import envelopeImg from '../../assets/envelope.svg';

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
            <div className='w-[46rem] h-[26rem]'>
                <h3 className='title font-bold text-4xl'>
                    Hire Me
                    <span className='text-4xl text-sky-400 leading-3'>.</span>
                </h3>

                <div className='mt-10 paragraph text-xl'>
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
                        className='w-fit mx-auto mt-10 mb-20 px-6 py-2 border-2 border-sky-400 font-semibold text-2xl text-sky-400 block rounded duration-300 hover:bg-sky-400 hover:text-white'
                    >
                        Download CV
                    </a>

                    <p
                        className={`w-fit mx-auto px-3 border-2 border-sky-400 text-sky-400 rounded-t-md rounded-bl-md ${
                            isCopied ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Email Copied
                    </p>

                    <div className='mt-5 flex justify-center gap-x-4'>
                        <a
                            href='https://www.linkedin.com/in/rifat-ahmed-tusar/'
                            target='_blank'
                        >
                            <img
                                src={linkedinImg}
                                className='w-8 h-8'
                                alt='linkedin'
                            />
                        </a>

                        <a
                            href='https://github.com/MohammadNaiem65'
                            target='_blank'
                        >
                            <img src={githubImg} alt='github' />
                        </a>

                        <button title='Copy email' onClick={copyToClipboard}>
                            <img src={envelopeImg} className='size-8' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
