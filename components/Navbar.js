'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const details = mobileNavRef.current;
    if (!details) return undefined;

    const onToggle = () => {
      document.body.style.overflow = details.open ? 'hidden' : '';
    };

    details.addEventListener('toggle', onToggle);
    return () => {
      details.removeEventListener('toggle', onToggle);
      document.body.style.overflow = '';
    };
  }, []);

  const closeMobileMenu = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbarInner}`}>
        <Link href="/" className={styles.brand} onClick={closeMobileMenu}>
          <div className={styles.brandAvatar}>
            <Image
              src="/profile.png"
              alt="Profile"
              width={50}
              height={50}
              style={{ borderRadius: 'inherit', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Code With Haris</span>
            <span className={styles.brandTagline}>Solo developer · Web & mobile</span>
          </div>
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <details ref={mobileNavRef} className={styles.mobileNav}>
          <summary className={styles.menuToggle} aria-label="Toggle menu">
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </summary>
          <button
            type="button"
            className={styles.backdrop}
            onClick={closeMobileMenu}
            aria-label="Close menu"
            tabIndex={-1}
          />
          <div className={styles.mobilePanel}>
            <ul className={styles.mobileLinks}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </nav>
  );
}
