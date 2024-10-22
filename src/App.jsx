import { useEffect } from 'react';
import Content from './components/content/Content';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    useEffect(() => {
        // Get the hash from the URL
        const hash = window.location.hash;

        if (hash) {
            // Add a small delay to ensure DOM elements are rendered
            setTimeout(() => {
                // Find the element
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    // Scroll to the element
                    element.scrollIntoView();
                }
            }, 100);
        }
    }, []);

    return (
        <section className='min-h-dvh bg-[radial-gradient(ellipse_at_center,_#294d5b_0%,_#090a0f_100%)] text-slate-400 grid grid-cols-7'>
            <Navbar />
            <Sidebar />
            <Content />
        </section>
    );
}

export default App;
