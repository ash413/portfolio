import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ mode, setMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: 'var(--bg)' }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 backdrop-blur-md transition-all duration-300
        ${scrolled ? 'border-b border-[var(--border)]' : 'border-b border-transparent'}`}
    >
      <span className="font-mono text-green-500 text-sm tracking-wider">
        vk.dev
      </span>

      <div className="hidden md:flex gap-8 items-center">
        <a
          href="#about"
          className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest hover:text-green-500 transition-colors"
        >
          About
        </a>

        <a
          href="#experience"
          className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest hover:text-green-500 transition-colors"
        >
          Experience
        </a>

        <a
          href="#projects"
          className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest hover:text-green-500 transition-colors"
        >
          Work
        </a>

        <a
          href="#contact"
          className="font-mono text-xs text-green-500 uppercase tracking-widest border border-green-500 px-4 py-1.5 rounded-sm hover:bg-[var(--accent-soft)] transition-colors"
        >
          Contact
        </a>

        <ThemeToggle mode={mode} setMode={setMode} />
      </div>
    </nav>
  );
}