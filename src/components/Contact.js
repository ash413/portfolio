import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { LuGithub, LuLinkedin, LuCoffee, LuHeadphones } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { CgFileDocument } from 'react-icons/cg';

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('vaishnavi.kadam413@gmail.com')
      .then(() => toast.success('Email copied!'))
      .catch(() => toast.error('Failed to copy email'));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/vaishnavikadam_resume_fulltime.pdf';
    link.setAttribute('download', 'vaishnavikadam_resume_fulltime.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const linkClass = "flex items-center gap-2 p-3 rounded-sm font-mono text-xs text-[#888680] border border-transparent hover:border-[#1c1c1e] hover:text-green-500 hover:bg-green-950 transition-all";

  return (
    <section id="contact" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <Toaster position="bottom-center" toastOptions={{
        style: { background: '#0d0d0e', color: '#ece8e3', border: '0.5px solid #1c1c1e', fontFamily: 'monospace', fontSize: '12px' }
      }} />

      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-green-500 text-xs tracking-widest">03</span>
        <span className="font-mono text-xs text-[#ece8e3] uppercase tracking-widest">Let's connect</span>
        <div className="flex-1 h-px bg-[#1c1c1e]" />
      </div>

      <div className="flex justify-center">
        <motion.div
          className="relative w-full max-w-md h-72 md:h-64 cursor-none"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: 1000 }}
        >
          {/* Front */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-full h-full bg-[#0d0d0e] border border-[#242428] rounded-xl p-8 flex flex-col justify-center items-center text-center overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mb-5" />
              <h2 className="text-xl font-normal text-[#ece8e3] mb-1">Vaishnavi Kadam</h2>
              <p className="font-mono text-xs text-[#4a4844] uppercase tracking-widest mb-5">Software Engineer</p>
              <div className="flex items-center gap-2 font-mono text-xs text-[#4a4844]">
                <LuHeadphones className="w-3.5 h-3.5" />
                <span>Currently listening to: Lo-fi Coding Mix</span>
              </div>
              <p className="font-mono text-[10px] text-[#2a2826] mt-5 tracking-wider">Click to connect →</p>
            </div>
          </motion.div>

          {/* Back */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            transition={{ duration: 0.6 }}
            style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', rotateY: -180 }}
          >
            <div className="relative w-full h-full bg-[#0d0d0e] border border-[#242428] rounded-xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleEmailClick} className={linkClass}>
                  <HiOutlineMail className="w-4 h-4" /><span>Email Me</span>
                </button>
                <a href="https://www.linkedin.com/in/vaishnavikadam4/" target="_blank" rel="noreferrer" className={linkClass}>
                  <LuLinkedin className="w-4 h-4" /><span>LinkedIn</span>
                </a>
                <a href="https://github.com/ash413" target="_blank" rel="noreferrer" className={linkClass}>
                  <LuGithub className="w-4 h-4" /><span>GitHub</span>
                </a>
                <a href="https://calendly.com/vaishnavi-kadam413" target="_blank" rel="noreferrer" className={linkClass}>
                  <LuCoffee className="w-4 h-4" /><span>Coffee Chat</span>
                </a>
                <button onClick={handleDownload} className={`${linkClass} col-span-2 justify-center`}>
                  <CgFileDocument className="w-4 h-4" /><span>Download Resume</span>
                </button>
              </div>
              <p className="font-mono text-[10px] text-[#2a2826] mt-3 text-center tracking-wider">Click to flip back →</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}