'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

function NavItem({ href, label, className, onClick }) {
  if (href.includes('#')) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbarInner}`}>
        <Link href="/" className={styles.brand} onClick={closeMobileMenu}>
          <div className={styles.brandAvatarWrap}>
            <span className={styles.avatarGlow} aria-hidden="true" />
            <div className={styles.brandAvatar}>
              <Image
                src="/profile.png"
                alt="Profile"
                width={50}
                height={50}
                priority
                style={{ borderRadius: 'inherit', objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Code With Haris</span>
            <span className={styles.brandTagline}>Solo developer · Web & mobile</span>
          </div>
        </Link>

        <div className={styles.navActions}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavItem href={item.href} label={item.label} className={styles.navLink} />
              </li>
            ))}
          </ul>
          <ThemeToggle className={styles.themeToggle} />
        </div>

        <div className={styles.mobileNav}>
          <ThemeToggle className={styles.mobileThemeToggle} />
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
          {mobileOpen ? (
            <button
              type="button"
              className={styles.backdrop}
              onClick={closeMobileMenu}
              aria-label="Close menu"
              tabIndex={-1}
            />
          ) : null}
          <div className={`${styles.mobilePanel} ${mobileOpen ? styles.mobilePanelOpen : ''}`}>
            <ul className={styles.mobileLinks}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavItem
                    href={item.href}
                    label={item.label}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  />
                </li>
              ))}
              <li className={styles.mobileThemeRow}>
                <span className={styles.mobileThemeLabel}>Appearance</span>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
