const skills = [
    { label: 'Python', hl: true }, { label: 'React', hl: true },
    { label: 'Node.js', hl: true }, { label: 'TypeScript', hl: true },
    { label: 'JavaScript' }, { label: 'Java' },
    { label: 'C++' }, { label: 'PostgreSQL' },
    { label: 'MongoDB' }, { label: 'AWS' },
    { label: 'Google Cloud' }, { label: 'Docker' },
    { label: 'Flask' }, { label: 'Express.js' },
    { label: 'TensorFlow' }, { label: 'Pandas' },
  ];
  
  export default function About() {
    return (
      <section id="about" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-green-500 text-xs tracking-widest">01</span>
          <span className="font-mono text-xs text-[#ece8e3] uppercase tracking-widest">About</span>
          <div className="flex-1 h-px bg-[#1c1c1e]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="space-y-5 text-[15px] text-[#888680] font-light leading-relaxed">
          <p>
            I'm a <strong className="text-[#ece8e3] font-normal">software engineer</strong> and <strong className="text-[#ece8e3] font-normal">full-stack developer</strong> focused on building systems that solve real problems — not just demos. 
            I care about both the engineering and the experience — <span className="text-green-500">the system behind the screen and the screen itself</span>.
          </p>

          <p>
            Currently pursuing my <strong className="text-[#ece8e3] font-normal">Master's in Computer Science</strong> at Syracuse University. 
            I've worked across startups and industry, building production-ready applications spanning <strong className="text-[#ece8e3] font-normal">backend systems, real-time interactions, and cloud infrastructure</strong>.
          </p>

          <p>
            I've built <strong className="text-[#ece8e3] font-normal">Forkfolio</strong> — a scalable, cloud-native recipe platform with AI-powered recommendations — 
            and developed systems like an <strong className="text-[#ece8e3] font-normal">Excel automation platform</strong> that reduced manual workflows by 40%, and a <strong className="text-[#ece8e3] font-normal">cross-platform mobile app</strong> with real-time interactions and secure session handling.
          </p>
        </div>

          <div>
          <div>
            <div className="font-mono text-[10px] text-[#4a4844] uppercase tracking-widest mb-2">
              Core stack
            </div>

            {/* NEW LINE HERE */}
            <div className="text-[13px] text-[#888680] mb-4 leading-relaxed">
            I work across the stack, with a focus on building scalable backend systems and high-performance applications.
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {skills.map(s => (
                <div key={s.label} className={`skill-item font-mono text-xs px-3 py-2 rounded-sm border flex items-center gap-2 transition-all duration-200
                  ${s.hl
                    ? 'bg-green-950 border-green-500/25 text-green-500'
                    : 'bg-[#0d0d0e] border-[#1c1c1e] text-[#888680] hover:border-green-500 hover:text-green-500'
                  }`}>
                  <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.hl ? 'bg-green-500' : 'bg-[#16a34a]'}`} />
                  {s.label}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }