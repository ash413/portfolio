import { useState } from 'react';
import { experience } from '../data/experience';

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <section id="experience" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-green-500 text-xs tracking-widest">02</span>
        <span className="font-mono text-xs text-[#ece8e3] uppercase tracking-widest">Experience</span>
        <div className="flex-1 h-px bg-[#1c1c1e]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0 border border-[#1c1c1e] rounded-md overflow-hidden">

        {/* tab list */}
        <div className="flex md:flex-col border-b md:border-b-0 md:border-r border-[#1c1c1e]">
          {experience.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActive(i)}
              className={`text-left px-5 py-4 font-mono text-xs tracking-wider transition-all border-b md:border-b border-[#1c1c1e] last:border-b-0
                ${active === i
                  ? 'text-green-500 bg-green-950 border-l-2 border-l-green-500'
                  : 'text-[#4a4844] hover:text-[#888680] hover:bg-[#0d0d0e]'
                }`}>
              <div className={`${active === i ? 'text-green-500' : 'text-[#2a2826]'} text-[10px] mb-1`}>{e.id}</div>
              {e.company}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="p-8 bg-[#080808]">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
            <div>
              <div className="text-lg font-normal text-[#ece8e3]">{exp.role}</div>
              <div className="font-mono text-xs text-green-500 mt-1">{exp.company}</div>
            </div>
            <div className="font-mono text-[10px] text-[#4a4844] tracking-wider whitespace-nowrap">{exp.period}</div>
          </div>

          <ul className="space-y-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#888680] font-light leading-relaxed">
                <span className="text-green-500 mt-1.5 flex-shrink-0 text-xs">▹</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}