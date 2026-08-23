'use client';

import { useId } from 'react';
import styles from './ServiceIcon.module.css';

function iconDefs(uid) {
  return {
    globeOrbit: `${uid}-globe-orbit`,
    globeMain: `${uid}-globe-main`,
    globeAccent: `${uid}-globe-accent`,
    phoneBody: `${uid}-phone-body`,
    phoneScreen: `${uid}-phone-screen`,
    phoneGlow: `${uid}-phone-glow`,
    phoneAccent: `${uid}-phone-accent`,
    paletteStroke: `${uid}-palette-stroke`,
    brushStroke: `${uid}-brush-stroke`,
    boltFill: `${uid}-bolt-fill`,
    boltStroke: `${uid}-bolt-stroke`,
    storeStroke: `${uid}-store-stroke`,
    downloadStroke: `${uid}-download-stroke`,
    rocketBody: `${uid}-rocket-body`,
    rocketFin: `${uid}-rocket-fin`,
    rocketFlame: `${uid}-rocket-flame`,
    reactRing: `${uid}-react-ring`,
    reactCore: `${uid}-react-core`,
    nextStroke: `${uid}-next-stroke`,
    worldFill: `${uid}-world-fill`,
    worldStroke: `${uid}-world-stroke`,
    desktopStroke: `${uid}-desktop-stroke`,
    desktopGlow: `${uid}-desktop-glow`,
    laptopStroke: `${uid}-laptop-stroke`,
    laptopGlow: `${uid}-laptop-glow`,
    sparkleA: `${uid}-sparkle-a`,
    sparkleB: `${uid}-sparkle-b`,
    flagGreen: `${uid}-flag-green`,
    flagWhite: `${uid}-flag-white`,
    flagCrescent: `${uid}-flag-crescent`,
  };
}

function getIcon(name, uid) {
  const id = iconDefs(uid);

  const icons = {
    website: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle className={styles.orbit} cx="24" cy="24" r="19" stroke={`url(#${id.globeOrbit})`} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.55" />
        <circle cx="24" cy="24" r="13" stroke={`url(#${id.globeMain})`} strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="5.5" ry="13" stroke={`url(#${id.globeMain})`} strokeWidth="1.75" />
        <path d="M11 24h26" stroke={`url(#${id.globeMain})`} strokeWidth="1.75" strokeLinecap="round" />
        <path className={styles.spark} d="M24 11v26" stroke={`url(#${id.globeAccent})`} strokeWidth="1.75" strokeLinecap="round" />
        <defs>
          <linearGradient id={id.globeOrbit} x1="5" y1="5" x2="43" y2="43" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#4338ca" /></linearGradient>
          <linearGradient id={id.globeMain} x1="11" y1="11" x2="37" y2="37" gradientUnits="userSpaceOnUse"><stop stopColor="#4338ca" /><stop offset="1" stopColor="#312e81" /></linearGradient>
          <linearGradient id={id.globeAccent} x1="24" y1="11" x2="24" y2="37" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8" /><stop offset="1" stopColor="#6366f1" /></linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect className={styles.device} x="15" y="8" width="18" height="32" rx="3.5" stroke={`url(#${id.phoneBody})`} strokeWidth="2" />
        <path d="M21 12h6" stroke={`url(#${id.phoneScreen})`} strokeWidth="2" strokeLinecap="round" />
        <rect className={styles.screenGlow} x="18" y="16" width="12" height="14" rx="2" fill={`url(#${id.phoneGlow})`} />
        <circle className={styles.pulse} cx="24" cy="35" r="2" fill={`url(#${id.phoneAccent})`} />
        <defs>
          <linearGradient id={id.phoneBody} x1="15" y1="8" x2="33" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#0ea5e9" /><stop offset="1" stopColor="#0369a1" /></linearGradient>
          <linearGradient id={id.phoneScreen} x1="21" y1="12" x2="27" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#7dd3fc" /><stop offset="1" stopColor="#38bdf8" /></linearGradient>
          <linearGradient id={id.phoneGlow} x1="18" y1="16" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8" stopOpacity="0.35" /><stop offset="1" stopColor="#0ea5e9" stopOpacity="0.08" /></linearGradient>
          <linearGradient id={id.phoneAccent} x1="22" y1="33" x2="26" y2="37" gradientUnits="userSpaceOnUse"><stop stopColor="#67e8f9" /><stop offset="1" stopColor="#22d3ee" /></linearGradient>
        </defs>
      </svg>
    ),
    design: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path className={styles.palette} d="M24 8c-8.8 0-16 6.5-16 14.5C8 30.5 14.5 38 24 38c3.2 0 5.8-1.2 7.6-3.2" stroke={`url(#${id.paletteStroke})`} strokeWidth="2" strokeLinecap="round" />
        <circle className={styles.dotA} cx="16" cy="20" r="2.5" fill="#ec4899" />
        <circle className={styles.dotB} cx="24" cy="14" r="2.5" fill="#f97316" />
        <circle className={styles.dotC} cx="32" cy="20" r="2.5" fill="#eab308" />
        <path className={styles.brush} d="M30 34l6 6" stroke={`url(#${id.brushStroke})`} strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id={id.paletteStroke} x1="8" y1="8" x2="32" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#ec4899" /><stop offset="1" stopColor="#db2777" /></linearGradient>
          <linearGradient id={id.brushStroke} x1="30" y1="34" x2="36" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#f97316" /><stop offset="1" stopColor="#ea580c" /></linearGradient>
        </defs>
      </svg>
    ),
    webapp: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path className={styles.boltGlow} d="M26 6L14 26h9l-1 16 14-22h-9l-1-14z" fill={`url(#${id.boltFill})`} opacity="0.22" />
        <path className={styles.bolt} d="M26 6L14 26h9l-1 16 14-22h-9l-1-14z" stroke={`url(#${id.boltStroke})`} strokeWidth="2" strokeLinejoin="round" />
        <defs>
          <linearGradient id={id.boltFill} x1="14" y1="6" x2="28" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#fbbf24" /><stop offset="1" stopColor="#f59e0b" /></linearGradient>
          <linearGradient id={id.boltStroke} x1="14" y1="6" x2="28" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#f59e0b" /><stop offset="1" stopColor="#d97706" /></linearGradient>
        </defs>
      </svg>
    ),
    aso: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect className={styles.store} x="10" y="12" width="28" height="26" rx="4" stroke={`url(#${id.storeStroke})`} strokeWidth="2" />
        <path d="M10 18h28" stroke={`url(#${id.storeStroke})`} strokeWidth="2" />
        <circle className={styles.storeDot} cx="16" cy="15" r="1.5" fill="#34d399" />
        <circle className={styles.storeDot} cx="21" cy="15" r="1.5" fill="#6ee7b7" />
        <path className={styles.download} d="M24 22v10M20 28l4 4 4-4" stroke={`url(#${id.downloadStroke})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id={id.storeStroke} x1="10" y1="12" x2="38" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#10b981" /><stop offset="1" stopColor="#059669" /></linearGradient>
          <linearGradient id={id.downloadStroke} x1="20" y1="22" x2="28" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#6ee7b7" /><stop offset="1" stopColor="#34d399" /></linearGradient>
        </defs>
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path className={styles.rocketFlame} d="M20 34c0 4 2 8 4 10 2-2 4-6 4-10" fill={`url(#${id.rocketFlame})`} />
        <path className={styles.rocketBody} d="M24 8l8 14-8 12-8-12 8-14z" stroke={`url(#${id.rocketBody})`} strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="20" r="2.5" fill={`url(#${id.rocketFin})`} />
        <path d="M16 22l-4 6 4 2M32 22l4 6-4 2" stroke={`url(#${id.rocketFin})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id={id.rocketBody} x1="16" y1="8" x2="32" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8" /><stop offset="1" stopColor="#4338ca" /></linearGradient>
          <linearGradient id={id.rocketFin} x1="16" y1="18" x2="36" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#312e81" /></linearGradient>
          <linearGradient id={id.rocketFlame} x1="20" y1="34" x2="28" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#fbbf24" /><stop offset="1" stopColor="#f97316" /></linearGradient>
        </defs>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <ellipse className={styles.reactRing} cx="24" cy="24" rx="14" ry="5.5" stroke={`url(#${id.reactRing})`} strokeWidth="1.75" />
        <ellipse className={styles.reactRing} cx="24" cy="24" rx="14" ry="5.5" stroke={`url(#${id.reactRing})`} strokeWidth="1.75" transform="rotate(60 24 24)" />
        <ellipse className={styles.reactRing} cx="24" cy="24" rx="14" ry="5.5" stroke={`url(#${id.reactRing})`} strokeWidth="1.75" transform="rotate(120 24 24)" />
        <circle className={styles.reactCore} cx="24" cy="24" r="3" fill={`url(#${id.reactCore})`} />
        <defs>
          <linearGradient id={id.reactRing} x1="10" y1="18" x2="38" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#22d3ee" /><stop offset="1" stopColor="#0891b2" /></linearGradient>
          <linearGradient id={id.reactCore} x1="21" y1="21" x2="27" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#67e8f9" /><stop offset="1" stopColor="#06b6d4" /></linearGradient>
        </defs>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke={`url(#${id.nextStroke})`} strokeWidth="2" />
        <path className={styles.nextArrow} d="M30 16v16M18 16l12 8-12 8" stroke={`url(#${id.nextStroke})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id={id.nextStroke} x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#0f172a" /><stop offset="1" stopColor="#475569" /></linearGradient>
        </defs>
      </svg>
    ),
    world: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="14" fill={`url(#${id.worldFill})`} opacity="0.18" />
        <circle cx="24" cy="24" r="14" stroke={`url(#${id.worldStroke})`} strokeWidth="2" />
        <path d="M10 24h28M24 10c-4 4-6 8.5-6 14s2 10 6 14M24 10c4 4 6 8.5 6 14s-2 10-6 14" stroke={`url(#${id.worldStroke})`} strokeWidth="1.75" strokeLinecap="round" />
        <defs>
          <linearGradient id={id.worldFill} x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#34d399" /><stop offset="1" stopColor="#059669" /></linearGradient>
          <linearGradient id={id.worldStroke} x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#10b981" /><stop offset="1" stopColor="#047857" /></linearGradient>
        </defs>
      </svg>
    ),
    desktop: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="12" width="28" height="18" rx="2" stroke={`url(#${id.desktopStroke})`} strokeWidth="2" />
        <rect className={styles.screenGlow} x="14" y="16" width="20" height="10" rx="1" fill={`url(#${id.desktopGlow})`} />
        <path d="M18 36h12M24 30v6" stroke={`url(#${id.desktopStroke})`} strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id={id.desktopStroke} x1="10" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#4338ca" /></linearGradient>
          <linearGradient id={id.desktopGlow} x1="14" y1="16" x2="34" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8" stopOpacity="0.35" /><stop offset="1" stopColor="#6366f1" stopOpacity="0.08" /></linearGradient>
        </defs>
      </svg>
    ),
    laptop: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect className={styles.device} x="12" y="14" width="24" height="16" rx="2" stroke={`url(#${id.laptopStroke})`} strokeWidth="2" />
        <rect className={styles.screenGlow} x="16" y="18" width="16" height="8" rx="1" fill={`url(#${id.laptopGlow})`} />
        <path d="M8 32h32l-2 4H10l-2-4z" stroke={`url(#${id.laptopStroke})`} strokeWidth="2" strokeLinejoin="round" />
        <defs>
          <linearGradient id={id.laptopStroke} x1="8" y1="14" x2="40" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#7c3aed" /></linearGradient>
          <linearGradient id={id.laptopGlow} x1="16" y1="18" x2="32" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#c4b5fd" stopOpacity="0.4" /><stop offset="1" stopColor="#8b5cf6" stopOpacity="0.08" /></linearGradient>
        </defs>
      </svg>
    ),
    sparkles: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path className={styles.sparkleA} d="M24 8l1.5 5.5L31 15l-5.5 1.5L24 22l-1.5-5.5L17 15l5.5-1.5L24 8z" fill={`url(#${id.sparkleA})`} />
        <path className={styles.sparkleB} d="M34 26l1 3.5 3.5 1-3.5 1-1 3.5-1-3.5-3.5-1 3.5-1 1-3.5z" fill={`url(#${id.sparkleB})`} />
        <path className={styles.sparkleA} d="M14 30l.8 2.8 2.8.8-2.8.8-.8 2.8-.8-2.8-2.8-.8 2.8-.8.8-2.8z" fill={`url(#${id.sparkleB})`} />
        <defs>
          <linearGradient id={id.sparkleA} x1="17" y1="8" x2="31" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#fde047" /><stop offset="1" stopColor="#f59e0b" /></linearGradient>
          <linearGradient id={id.sparkleB} x1="10" y1="26" x2="38" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6" /><stop offset="1" stopColor="#ec4899" /></linearGradient>
        </defs>
      </svg>
    ),
    flag: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="12" width="28" height="20" rx="2" fill={`url(#${id.flagGreen})`} />
        <rect x="10" y="12" width="10" height="20" rx="2" fill={`url(#${id.flagWhite})`} />
        <circle cx="18" cy="22" r="4.5" fill={`url(#${id.flagGreen})`} />
        <circle className={styles.flagStar} cx="19.5" cy="22" r="3.8" fill={`url(#${id.flagWhite})`} />
        <path d="M10 34h28" stroke={`url(#${id.flagGreen})`} strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id={id.flagGreen} x1="10" y1="12" x2="38" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#059669" /><stop offset="1" stopColor="#047857" /></linearGradient>
          <linearGradient id={id.flagWhite} x1="10" y1="12" x2="20" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#ffffff" /><stop offset="1" stopColor="#e2e8f0" /></linearGradient>
        </defs>
      </svg>
    ),
    status: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle className={styles.pulse} cx="24" cy="24" r="8" fill="#10b981" opacity="0.2" />
        <circle className={styles.pulse} cx="24" cy="24" r="5" fill="#10b981" />
        <circle cx="24" cy="24" r="2" fill="#ecfdf5" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}

export default function ServiceIcon({
  name,
  size = 'lg',
  featured = false,
  onDark = false,
  inline = false,
  stageClassName = '',
}) {
  const uid = useId().replace(/:/g, '');
  const icon = getIcon(name, uid);

  if (!icon) return null;

  const stageClasses = [
    styles.iconStage,
    styles[`iconStage${size.charAt(0).toUpperCase()}${size.slice(1)}`],
    featured ? styles.iconStageFeatured : '',
    onDark ? styles.iconStageOnDark : '',
    inline ? styles.iconStageInline : '',
    stageClassName,
  ].filter(Boolean).join(' ');

  return (
    <span className={stageClasses} data-icon={name} aria-hidden="true">
      <span className={styles.iconInner}>{icon}</span>
    </span>
  );
}
