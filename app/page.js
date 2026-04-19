import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Build something great! - Code With Haris',
  description: 'Code With Haris — where we turn your ideas into reality. From crafting stunning designs to building robust software and deploying seamlessly.',
};

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero} id="home">
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            Available for new projects
          </div>
          <h1 className={styles.heroTitle}>
            ✨ Design, 🚀 Build &amp; 🚚 Deploy
          </h1>
          <p className={styles.heroSubtitle}>
            Welcome to Code With Haris! 🌟 where we turn your ideas into reality. From crafting stunning designs ✨ to building robust software 🚀 and deploying it seamlessly 🚚, we&apos;re here to help your business shine. Let&apos;s create something amazing together! 🎉
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link href="#services" className="btn btn-outline">
              Discover Our Services
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className={styles.services} id="services">
        <div className="container">
          <p className="section-label">What we do</p>
          <div className="section-header">
            <h2 className="section-title">Our Expert Services</h2>
            <p className="section-subtitle">Custom Solutions Tailored for Your Digital Success</p>
          </div>
          <div className={styles.servicesGrid}>
            {[
              { icon: '🌐', title: 'Website Development', desc: 'Our skilled developers create responsive and beautiful websites designed to fit your business needs. Whether it\'s a simple landing page or a full corporate site, we make sure it works smoothly on all devices using the latest tools.' },
              { icon: '📱', title: 'Mobile App Development', desc: 'Connect with your customers anytime with our mobile app development services. We create user-friendly, feature-packed iOS and Android apps to engage your audience and enhance your brand\'s mobile presence.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Great design starts with the user. Our UI/UX experts focus on creating designs that are both beautiful and easy to use, striking the perfect balance between style and functionality to drive results.' },
              { icon: '⚡', title: 'Web Application Development', desc: 'Streamline your business with custom web applications. We use modern frameworks and agile methods to create secure, efficient, and dynamic solutions that enhance productivity and simplify workflows.' },
            ].map((service) => (
              <div key={service.title} className={styles.serviceCard}>
                <div className={styles.cardGlow} />
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <Link href="#services" className={styles.serviceLink}>
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===================== CTA ===================== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={`container ${styles.ctaInner}`}>
          <p className={styles.ctaBadge}>🚀 Let&apos;s Work Together</p>
          <h2 className={styles.ctaTitle}>Ready to Elevate Your Digital Presence?</h2>
          <p className={styles.ctaSubtitle}>Bring your vision to life with Code With Haris. Collaborate with our experts and create your next successful project today!</p>
          <Link href="/contact" className="btn btn-white">
            Let&apos;s Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
