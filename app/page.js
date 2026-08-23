import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import PricingSection from '@/components/PricingSection';
import styles from './page.module.css';

export const metadata = {
  title: 'I build fast, modern web apps - Code With Haris',
  description: 'Freelance full-stack developer in Pakistan specializing in Next.js, React, React Native mobile apps, and Node.js.',
};

const services = [
  { icon: 'website', title: 'Website Development', desc: 'I build SEO-friendly, responsive websites tailored to your business goals — from high-converting landing pages to full-scale platforms, with fast performance, clean code, and seamless compatibility across devices.' },
  { icon: 'mobile', title: 'Mobile App Development', desc: 'Grow your business with custom mobile apps using React Native for iOS and Android. I create fast, user-focused applications with modern features, smooth performance, and scalable architecture.' },
  { icon: 'design', title: 'UI/UX Design', desc: 'I craft intuitive interfaces and visually engaging layouts that improve usability, increase conversions, and deliver a polished experience your users will love.' },
  { icon: 'webapp', title: 'Web Application Development', desc: 'I build scalable, high-performance web applications with modern frameworks and secure technologies — automating workflows, improving efficiency, and supporting real business growth.' },
];

const asoSteps = [
  { label: 'Keyword research', text: 'Target the terms your ideal users actually search for.' },
  { label: 'Listing optimization', text: 'Craft titles, copy, and visuals that convert browsers into downloads.' },
  { label: 'Submission & compliance', text: 'Navigate App Store and Play Store review until you\'re live.' },
];

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
              View My Services
            </Link>
          </div>

        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className={styles.services} id="services">
        <div className={`container ${styles.servicesContainer}`}>
          <header className={styles.servicesHeader}>
            <p className={styles.servicesEyebrow}>What I do</p>
            <h2 className={styles.servicesTitle}>Services I Offer</h2>
            <p className={styles.servicesSubtitle}>
              Custom solutions tailored to your goals — built start to finish by me.
            </p>
          </header>

          <div className={styles.servicesBento}>
            <article className={styles.featuredServiceCard}>
              <div className={styles.featuredHeader}>
                <ServiceIcon name="aso" size="lg" featured stageClassName={styles.featuredIconStage} />
                <span className={styles.featuredTag}>Featured</span>
              </div>
              <h3 className={styles.featuredTitle}>ASO & App Store Submission</h3>
              <p className={styles.featuredDesc}>
                End-to-end App Store and Play Store launches — keyword research, listing optimization, screenshots, and submission handling so your app gets found and approved the first time.
              </p>
              <ol className={styles.featuredSteps}>
                {asoSteps.map((step, index) => (
                  <li key={step.label} className={styles.featuredStep}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <span className={styles.stepText}>
                      <strong>{step.label}</strong>
                      {' — '}
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </article>

            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <ServiceIcon name={service.icon} size="lg" stageClassName={styles.serviceIconStage} />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      {/* ===================== CTA ===================== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={`container ${styles.ctaInner}`}>
          <p className={styles.ctaBadge}>
            <ServiceIcon name="rocket" size="sm" onDark stageClassName={styles.ctaBadgeIcon} />
            Let&apos;s Work Together
          </p>
          <h2 className={styles.ctaTitle}>Ready to Elevate Your Digital Presence?</h2>
          <p className={styles.ctaSubtitle}>Bring your vision to life with Code With Haris. Work directly with me — one developer, end-to-end — and ship your next project with confidence.</p>
          <Link href="/contact" className="btn btn-white">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
