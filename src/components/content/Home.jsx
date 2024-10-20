export default function Home() {
    return (
        <section
            id='home'
            className='w-full h-dvh col-span-7 grid-cols-subgrid flex justify-center items-center'
        >
            <div className='w-[40rem] h-[20rem]'>
                <h3 className='title font-bold text-4xl'>Md Rifat Ahmed</h3>
                <p className='paragraph text-2xl text-sky-400'>
                    Innovating with MERN
                </p>

                <p className='my-8 text-justify paragraph text-lg'>
                    I&apos;m a full-stack developer passionate about crafting
                    exceptional digital experiences. I&apos;m committed to
                    deliver top-notch solutions. I love collaborating with
                    others and eager to learn new things, improve my skills and
                    achieve great things together. And when it comes to work,
                    I&apos;m dedicated to putting in the time and effort needed
                    to get the job done right.
                </p>

                <a
                    href='#projects'
                    className='w-fit ml-auto px-5 py-2 border-2 border-sky-400 font-semibold uppercase hover:bg-sky-400 text-sky-400 hover:text-white block duration-300'
                >
                    My Projects
                </a>
            </div>
        </section>
    );
}
