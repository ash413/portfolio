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
        <span className="font-mono text-xs text-[var(--text)] uppercase tracking-widest">Selected work</span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="flex gap-2 mb-9 flex-wrap">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-mono text-xs px-4 py-1.5 rounded-sm border uppercase tracking-wider transition-all
              ${
                active === f
                  ? 'border-green-500 text-green-500 bg-[var(--accent-soft)]'
                  : 'border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--border-strong)] hover:text-[var(--text-muted)]'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 border border-[var(--border)] rounded-md overflow-hidden mb-5"
        style={{ gap: '1px', background: 'var(--border)' }}
      >
        {visible.map(p => (
          <div key={p.id} className="project-card bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors p-7 flex flex-col group">
            <div className="flex justify-between items-start mb-3.5">
              <span className="font-mono text-[10px] text-[var(--text-faint)]">{p.id}</span>
              {p.link && p.link !== '#' && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Live ↗
                </a>
              )}
            </div>

            <div className="text-lg font-normal text-[var(--text)] mb-2">{p.name}</div>
            <div className="text-[13px] text-[var(--text-muted)] leading-relaxed font-normal flex-1 mb-5">
              {p.desc}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map(t => (
                <span
                  key={t}
                  className={`font-mono text-[9px] px-2 py-1 rounded-sm border
                    ${
                      p.primaryTags.includes(t)
                        ? 'bg-[var(--accent-soft)] border-[var(--accent-soft-border)] text-green-500'
                        : 'bg-[var(--surface-2)] border-[var(--border)] text-[var(--text-dim)]'
                    }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 px-5 py-4 border border-[var(--border)] rounded-sm bg-[var(--surface)]">
        <span className="font-mono text-[10px] text-green-500 flex-shrink-0">// note</span>
        <span className="font-mono text-xs text-[var(--text-dim)]">
          ML projects don&apos;t have live links yet — GitHub repos linked where available.
        </span>
      </div>
    </section>
  );
}