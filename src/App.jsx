import Content from './components/content/Content';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <section className='min-h-dvh bg-[radial-gradient(ellipse_at_center,_#1b2735_0%,_#090a0f_100%)] text-slate-400 grid grid-cols-7'>
            <Navbar />
            <Sidebar />
            <Content />
        </section>
    );
}

export default App;
