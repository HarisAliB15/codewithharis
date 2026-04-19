'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbarInner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <div className={styles.brandAvatar}>
            <Image src="/profile.png" alt="Profile" width={50} height={50} style={{ borderRadius: 'inherit', objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Code With Haris</span>
            <span className={styles.brandTagline}>Create something powerful!</span>
          </div>
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><Link href="/#services" className={styles.navLink} onClick={closeMenu}>Services</Link></li>
          <li><Link href="/projects" className={styles.navLink} onClick={closeMenu}>Projects</Link></li>
          <li><Link href="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link></li>
          <li><Link href="/about" className={styles.navLink} onClick={closeMenu}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
