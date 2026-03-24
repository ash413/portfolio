const skills = [
  { label: 'Python', hl: true }, { label: 'TypeScript', hl: true },
  { label: 'MongoDB', hl: true }, { label: 'AWS', hl: true },
  { label: 'JavaScript' }, { label: 'Java' },
  { label: 'Go' }, { label: 'PostgreSQL' },
  { label: 'React' }, { label: 'Next.js' },
  { label: 'Node.js' }, { label: 'Express.js' },
  { label: 'Docker' }, { label: 'Kubernetes' },
  { label: 'CI/CD' }, { label: 'Git' },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-green-500 text-xs tracking-widest">01</span>
        <span className="font-mono text-xs text-[var(--text)] uppercase tracking-widest">About</span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="space-y-5 text-[15px] text-[var(--text-muted)] font-normal leading-relaxed">
          <p>
            I'm a <strong className="text-[var(--text)] font-medium">software engineer</strong> and <strong className="text-[var(--text)] font-medium">full-stack developer</strong> focused on building systems that solve real problems — not just demos.
            I care about both the engineering and the experience — <span className="text-green-500">the system behind the screen and the screen itself</span>.
          </p>

          <p>
            Currently pursuing my <strong className="text-[var(--text)] font-medium">Master&apos;s in Computer Science</strong> at Syracuse University.
            My work spans <strong className="text-[var(--text)] font-medium">full-stack applications, backend systems, cloud infrastructure, and AI-powered products</strong>.
          </p>

          <p>
            I&apos;ve built projects like <strong className="text-[var(--text)] font-medium">Forkfolio</strong>, a cloud-native recipe platform with personalized recommendations,
            <strong className="text-[var(--text)] font-medium"> Income Firewall</strong>, a fintech product for managing irregular income,
            and <strong className="text-[var(--text)] font-medium">TaxRadar</strong>, an AI-powered deduction intelligence tool for freelancers and small businesses.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-widest mb-2">
            Core stack
          </div>

          <div className="text-[13px] text-[var(--text-muted)] mb-4 leading-relaxed">
            I work across the stack, with a focus on building scalable backend systems and high-performance applications.
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {skills.map(s => (
              <div
                key={s.label}
                className={`skill-item font-mono text-xs px-3 py-2 rounded-sm border flex items-center gap-2 transition-all duration-200
                  ${
                    s.hl
                      ? 'bg-[var(--accent-soft)] border-[var(--accent-soft-border)] text-green-500'
                      : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text-muted)] hover:border-green-500 hover:text-green-500'
                  }`}
              >
                <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.hl ? 'bg-green-500' : 'bg-green-500'}`} />
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}