import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects - Code With Haris',
  description: 'Explore our portfolio of websites, mobile apps, and web applications built by Code With Haris.',
};

const projects = [
  { image: '/project-weather-app.png', icon: '⛅', bg: 'linear-gradient(135deg,#dbeafe,#ede9fe)', tag: 'React Native', name: 'Weather App', desc: 'A beautiful real-time weather application providing accurate forecasts, dynamic UI based on weather conditions, and location-based updates.' },
  { icon: '🍿', bg: 'linear-gradient(135deg,#dcfce7,#d1fae5)', tag: 'React Native', name: 'Movie Hub', desc: 'A comprehensive movie catalog app featuring advanced search, trailers, detailed cast information, and personalized user watchlists.' },
  { image: '/project-andy-ai.png', icon: '🤖', bg: 'linear-gradient(135deg,#fef3c7,#fde68a)', tag: 'React Native', name: 'Andy AI Voice Assistant', desc: 'An intelligent voice assistant powered by modern AI, allowing users to issue hands-free vocal commands and get smart on-the-fly responses.' },
  { image: '/project-snap-savior.png', icon: '📸', bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', tag: 'Web App', name: 'Snap Savior', desc: 'A robust web application designed for securely saving, organizing, and sharing your most cherished photos and snapshots online.' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="section-label">Our Portfolio</p>
          <h1 className="pageTitle">Our Projects</h1>
          <p className="pageSubtitle">Explore the products and experiences we&apos;ve crafted for our clients  from mobile apps to full-stack web platforms.</p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.name} className={styles.projectCard}>
                <div className={styles.projectThumb} style={{ background: p.bg, position: 'relative', overflow: 'hidden' }}>
                  {p.image ? (
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  ) : (
                    <span>{p.icon}</span>
                  )}
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectTag}>{p.tag}</span>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection">
        <div className="ctaGlow" />
        <div className="container ctaInner">
          <p className="ctaBadge">🚀 Let&apos;s Work Together</p>
          <h2 className="ctaTitle">Have a project in mind?</h2>
          <p className="ctaSubtitle">We&apos;d love to hear about your idea. Let&apos;s build something amazing together.</p>
          <Link href="/contact" className="btn btn-white">
            Let&apos;s Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
