import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
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
      <PageHero
        eyebrow="Portfolio"
        title="Selected work"
        subtitle="Products and experiences crafted for clients — from mobile apps to full-stack platforms."
      />

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <article key={p.name} className={`premiumCard ${styles.projectCard}`}>
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
                  <span className="cardEyebrow">{p.tag}</span>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        badgeIcon="rocket"
        badge="Let's Work Together"
        title="Have a project in mind?"
        subtitle="Share your idea and I'll explore how to bring it to life."
        buttonText="Start a conversation"
      />
    </>
  );
}
