import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto h-px bg-[#1c1c1e]" />
        <About />
        <div className="max-w-5xl mx-auto h-px bg-[#1c1c1e]" />
        <Projects />
        <div className="max-w-5xl mx-auto h-px bg-[#1c1c1e]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}