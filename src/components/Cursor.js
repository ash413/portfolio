import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const move = e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    const expand = () => cursor.classList.add('expanded');
    const shrink = () => cursor.classList.remove('expanded');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .skill-item, .project-card').forEach(el => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', shrink);
    });
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <style>{`
        .cursor { position: fixed; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); }
        .cursor.expanded { width: 28px; height: 28px; background: transparent; border: 1px solid #22c55e; opacity: 0.6; transition: width 0.15s, height 0.15s, background 0.15s, border 0.15s; }
      `}</style>
      <div className="cursor" ref={cursorRef} />
    </>
  );
}