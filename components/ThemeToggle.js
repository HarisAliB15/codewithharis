'use client';

import { useEffect, useState } from 'react';
import { applyTheme, getPreferredTheme, setTheme } from '@/lib/theme';
import styles from './ThemeToggle.module.css';

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function ThemeToggle({ className = '' }) {
  const [theme, setThemeState] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getPreferredTheme());
    setMounted(true);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      const stored = window.localStorage.getItem('cwh-theme');
      if (!stored) {
        const next = media.matches ? 'dark' : 'light';
        setThemeState(next);
        applyTheme(next);
      }
    };

    media.addEventListener('change', onSystemChange);
    return () => media.removeEventListener('change', onSystemChange);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setThemeState(next);
  };

  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      data-mounted={mounted ? 'true' : 'false'}
    >
      <span className={styles.track} aria-hidden="true">
        <span className={`${styles.thumb} ${isDark ? styles.thumbDark : ''}`}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
      <span className={styles.label}>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
