'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        console.error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand */}
        <div className={styles.footerBrandCol}>
          <Link href="/" className={styles.brand}>
            <div className={styles.brandAvatar}>
              <Image src="/profile.png" alt="Profile" width={40} height={40} style={{ borderRadius: 'inherit', objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Code With Haris</span>
              <span className={styles.brandTagline}>Build something great!</span>
            </div>
          </Link>
          <p className={styles.footerBrandDesc}>
            We turn ideas into digital reality. From design to deployment, we&apos;re your trusted technology partner.
          </p>
        </div>

        {/* Services */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/#services">Web Development</Link></li>
            <li><Link href="/#services">App Development</Link></li>
            <li><Link href="/#services">Hybrid Apps</Link></li>
            <li><Link href="/#services">UI/UX Design</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Company</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Connect</h4>
          <ul className={styles.footerLinks}>
            <li><a href="https://x.com/HarisAli60237" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/harisali526/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com/HarisAliB15" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/haris-ali-asghar-software-engineer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://wa.me/923116571110" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerNewsletterCol}>
          <h4 className={styles.footerHeading}>Sign up for our newsletter</h4>
          <p className={styles.newsletterDesc}>Subscribe to get the latest design news, articles, resources and inspiration.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              className={styles.newsletterInput}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`btn btn-primary btn-sm ${subscribed ? styles.subscribed : ''}`}
            >
              {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p>© 2026 - Code With Haris</p>
        </div>
      </div>
    </footer>
  );
}
