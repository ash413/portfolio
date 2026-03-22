import { useState } from 'react';
import { projects } from '../data/projects';

const filters = ['all', 'fullstack', 'ml'];

export default function Projects() {
  const [active, setActive] = useState('all');
  const visible = projects.filter(p => active === 'all' || p.type === active);

  return (
    <section id="projects" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-green-500 text-xs tracking-widest">03</span>
        <span className="font-mono text-xs text-[#ece8e3] uppercase tracking-widest">Selected work</span>
        <div className="flex-1 h-px bg-[#1c1c1e]" />
      </div>

      <div className="flex gap-2 mb-9 flex-wrap">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            className={`font-mono text-xs px-4 py-1.5 rounded-sm border uppercase tracking-wider transition-all
              ${active === f
                ? 'border-green-500 text-green-500 bg-green-950'
                : 'border-[#1c1c1e] text-[#4a4844] hover:border-[#242428] hover:text-[#888680]'
              }`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border border-[#1c1c1e] rounded-md overflow-hidden mb-5" style={{ gap: '1px', background: '#1c1c1e' }}>
        {visible.map(p => (
          <div key={p.id} className="project-card bg-[#080808] hover:bg-[#0d0d0e] transition-colors p-7 flex flex-col group">
            <div className="flex justify-between items-start mb-3.5">
              <span className="font-mono text-[10px] text-[#2a2826]">{p.id}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="font-mono text-[10px] text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Live ↗
                </a>
              )}
            </div>
            <div className="text-lg font-normal text-[#ece8e3] mb-2">{p.name}</div>
            <div className="text-[13px] text-[#888680] leading-relaxed font-light flex-1 mb-5">{p.desc}</div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map(t => (
                <span key={t} className={`font-mono text-[9px] px-2 py-1 rounded-sm border
                  ${p.primaryTags.includes(t)
                    ? 'bg-green-950 border-green-500/20 text-green-500'
                    : 'bg-[#111113] border-[#1c1c1e] text-[#4a4844]'
                  }`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 px-5 py-4 border border-[#1c1c1e] rounded-sm bg-[#0d0d0e]">
        <span className="font-mono text-[10px] text-green-500 flex-shrink-0">// note</span>
        <span className="font-mono text-xs text-[#4a4844]">ML projects don't have live links yet — GitHub repos linked where available.</span>
      </div>
    </section>
  );
}