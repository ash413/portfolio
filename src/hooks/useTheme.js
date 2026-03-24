import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'vk-theme-mode';

export default function useTheme() {
  const [mode, setMode] = useState('auto');
  const [mounted, setMounted] = useState(false);
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const saved = localStorage.getItem(STORAGE_KEY);

    setMode(saved || 'auto');
    setSystemDark(media.matches);
    setMounted(true);

    const onChange = e => setSystemDark(e.matches);

    if (media.addEventListener) {
      media.addEventListener('change', onChange);
    } else {
      media.addListener(onChange);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', onChange);
      } else {
        media.removeListener(onChange);
      }
    };
  }, []);

  const resolvedTheme = useMemo(() => {
    if (mode === 'light') return 'light';
    if (mode === 'dark') return 'dark';
    return systemDark ? 'dark' : 'light';
  }, [mode, systemDark]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, resolvedTheme, mounted]);

  return {
    mode,
    setMode,
    resolvedTheme,
    mounted,
  };
}