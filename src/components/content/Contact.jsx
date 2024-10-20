import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setIsSuccess(true);
                },
                (error) => {
                    setError(error.text);
                    console.log('FAILED...', error.text || 'An error occurred');
                }
            );
    };

    return (
        <section
            id='contact'
            className='w-full h-dvh col-span-7 grid-cols-subgrid flex justify-center items-center'
        >
            <div className='w-[46rem] h-[26rem]'>
                <h3 className='title font-bold text-4xl'>
                    Get in Touch
                    <span className='text-4xl text-sky-400 leading-3'>.</span>
                </h3>

                {/* From */}
                {!isSuccess && !error && (
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='w-4/5 mx-auto mt-10 grid grid-cols-3 gap-y-4'
                    >
                        <label
                            htmlFor='from_name'
                            className='title col-span-1 text-xl'
                        >
                            Name:
                        </label>
                        <input
                            type='text'
                            id='from_name'
                            name='from_name'
                            placeholder='Enter your name'
                            className='col-span-2 px-2 py-1 font-agdasima rounded'
                            required
                        />

                        <label
                            htmlFor='from_email'
                            className='title col-span-1 text-xl'
                        >
                            Email:
                        </label>
                        <input
                            type='email'
                            id='from_email'
                            name='from_email'
                            placeholder='Enter your email'
                            className='col-span-2 px-2 py-1 font-agdasima rounded'
                            required
                        />

                        <label
                            htmlFor='message'
                            className='title col-span-1 text-xl'
                        >
                            Message:
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            placeholder='Enter your message'
                            rows={6}
                            className='col-span-2 px-2 py-1 font-agdasima rounded'
                            required
                        />

                        <input
                            type='submit'
                            value='Send'
                            className='col-[2/3] w-30 mt-5 px-3 py-1 border-2 border-sky-400 text-lg text-sky-400 rounded cursor-pointer duration-300 hover:text-white hover:bg-sky-400'
                        />
                    </form>
                )}

                {/* Success */}
                {isSuccess && !error && (
                    <p className='mt-24 text-4xl text-green-700'>
                        Thank you for reaching out! 🎉
                    </p>
                )}

                {/* Success */}
                {!isSuccess && error && (
                    <p className='mt-24 text-4xl text-red-700'>{error}</p>
                )}
            </div>
        </section>
    );
}
