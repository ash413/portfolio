import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';


export default function App() {
  const { mode, setMode, resolvedTheme } = useTheme();

  return (
    <>
      <Cursor resolvedTheme={resolvedTheme} />
      <Navbar mode={mode} setMode={setMode} />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <Hero />
        <div className="max-w-5xl mx-auto h-px bg-[var(--border)]" />
        <About />
        <div className="max-w-5xl mx-auto h-px bg-[var(--border)]" />
        <Experience />
        <div className="max-w-5xl mx-auto h-px bg-[var(--border)]" />
        <Projects />
        <div className="max-w-5xl mx-auto h-px bg-[var(--border)]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}