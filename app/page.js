import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'I build fast, modern web apps - Code With Haris',
  description: 'Freelance full-stack developer in Pakistan specializing in Next.js, React, React Native mobile apps, and Node.js.',
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
            I Build Fast, Modern Web Apps 🚀
          </h1>
          <p className={styles.heroSubtitle}>
            Freelance full-stack web and mobile app developer from Pakistan. 🇵🇰 <br />
            Building fast, modern apps with React 🌐, Next.js ⚛️ and React Native 📱 for clients worldwide 🌍. Whether you need custom web development 🖥️ or mobile app development 🚀, I bring your ideas to life with powerful digital solutions ⚡. Let&apos;s build something incredible together! 💻✨
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
              { icon: '🌐', title: 'Website Development', desc: 'Our professional developers build SEO-friendly, responsive websites tailored to your business goals. From high-converting landing pages to full-scale corporate platforms, we ensure fast performance, clean code, and seamless compatibility across all devices.' },
              { icon: '📱', title: 'Mobile App Development', desc: 'Grow your business with custom mobile app development using React Native for iOS and Android. We create fast, user-focused applications with modern features, smooth performance, and scalable architecture to boost engagement.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Deliver better user experiences with expert UI/UX design services. We craft intuitive interfaces, modern layouts, and visually engaging designs that improve usability, increase conversions, and enhance overall customer satisfaction.' },
              { icon: '⚡', title: 'Web Application Development', desc: 'Transform your workflow with custom web application development solutions. Using modern frameworks and secure technologies, we build scalable, high-performance applications that automate processes, improve efficiency, and support business growth.' },
            ].map((service) => (
              <div key={service.title} className={styles.serviceCard}>
                <div className={styles.cardGlow} />
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
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
