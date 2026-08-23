import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Explore web development projects built by Haris Ali using Next.js, React and modern technologies.',
};

const projects = [
  {
    image: '/project-weather-app.png',
    tag: 'React Native',
    name: 'Weather App',
    desc: 'Real-time weather with dynamic UI, accurate forecasts, and location-based updates.',
  },
  {
    tag: 'React Native',
    name: 'Movie Hub',
    desc: 'Movie catalog with search, trailers, cast details, and personalized watchlists.',
  },
  {
    image: '/project-andy-ai.png',
    tag: 'React Native',
    name: 'Andy AI Voice Assistant',
    desc: 'Hands-free voice assistant powered by modern AI for smart on-the-fly responses.',
  },
  {
    image: '/project-snap-savior.png',
    tag: 'Web App',
    name: 'Snap Savior',
    desc: 'Secure web app for saving, organizing, and sharing photos online.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="section-label">Portfolio</p>
          <h1 className="pageTitle">Selected work</h1>
          <p className="pageSubtitle">
            Products and experiences crafted for clients — from mobile apps to full-stack platforms.
          </p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <article key={p.name} className={styles.projectCard}>
                <div className={styles.projectThumb}>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className={styles.projectPlaceholder}>
                      <span>{p.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectTag}>{p.tag}</span>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaGlow" aria-hidden="true" />
        <div className="container ctaInner">
          <p className="ctaBadge">Next step</p>
          <h2 className="ctaTitle">Have a project in mind?</h2>
          <p className="ctaSubtitle">
            Share your idea and I&apos;ll explore how to bring it to life.
          </p>
          <Link href="/contact" className="btn btn-white">
            Start a conversation
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
