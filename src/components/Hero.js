export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 max-w-5xl mx-auto relative"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-green-500 text-xs uppercase tracking-widest">
              OPEN TO SOFTWARE ENGINEERING ROLES
            </span>
          </div>

          <h1 className="text-[clamp(40px,8vw,96px)] font-[350] text-[var(--text)] leading-none tracking-tight mb-3">
            Vaishnavi
            <br />
            Kadam
            <span className="inline-block w-0.5 h-[0.8em] bg-green-500 ml-1 align-middle animate-[blink_1.1s_step-end_infinite]" />
          </h1>

          <div className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-[0.14em] mb-9">
            Software Engineer building scalable systems and user-first products.
          </div>

          <p className="text-base text-[var(--text-muted)] max-w-lg leading-relaxed font-normal mb-11">
            I build full-stack applications that actually get used — from real-time systems and production-ready mobile apps to AI-powered platforms.
            Currently pursuing my Master’s in Computer Science at Syracuse University, with experience shipping products across startups and industry — working with React, Node.js, Python, and cloud infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#projects"
              className="font-mono text-xs bg-green-500 text-[#030a05] px-6 py-2.5 rounded-sm font-medium tracking-wider hover:opacity-85 transition-opacity text-center"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-[var(--text-muted)] border border-[var(--border-strong)] px-6 py-2.5 rounded-sm tracking-wider hover:border-[var(--text-dim)] hover:text-[var(--text)] transition-all text-center"
            >
              Get in touch
            </a>
          </div>

          <div className="flex gap-5">
            {[
              { label: 'LINKEDIN', href: 'https://linkedin.com/in/vaishnavikadam4' },
              { label: 'GITHUB', href: 'https://github.com/ash413' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[var(--text-dim)] hover:text-green-500 transition-colors flex items-center gap-1 before:content-['↗'] before:text-[10px]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="p-2 bg-[var(--surface)] border border-[var(--border)] rounded-md">
            <img
              src="/profile.png"
              alt="Vaishnavi Kadam"
              className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-300 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-9 left-12 items-center gap-2.5">
        <div className="w-10 h-px bg-[var(--text-dim)] relative overflow-hidden">
          <div className="absolute inset-y-0 w-full bg-green-500 animate-[scanline_2s_ease-in-out_infinite]" />
        </div>
        <span className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-widest">
          Scroll
        </span>
      </div>
    </section>
  );
}