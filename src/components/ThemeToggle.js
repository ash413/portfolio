export default function ThemeToggle({ mode, setMode }) {
    const options = ['auto', 'dark', 'light'];
  
    return (
      <div className="flex items-center gap-1 border border-[var(--border)] rounded-sm p-1 bg-[var(--surface)]">
        {options.map(option => (
          <button
            key={option}
            onClick={() => setMode(option)}
            className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-sm transition-all
              ${
                mode === option
                  ? 'text-green-500 bg-[var(--accent-soft)]'
                  : 'text-[var(--text-dim)] hover:text-[var(--text)]'
              }`}
            aria-label={`Set theme to ${option}`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }