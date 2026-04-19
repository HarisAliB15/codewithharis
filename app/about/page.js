import styles from './page.module.css';

export const metadata = {
  title: 'About - Code With Haris',
  description: 'Learn about Code With Haris — a team of passionate developers and designers building exceptional digital products.',
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.aboutSection} style={{ textAlign: 'center', padding: '12rem 1rem' }}>
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚧</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Coming Soon</h2>
          <p style={{ color: '#6b7280', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>We are currently putting together the details of our story, values, and our amazing team. Please stay tuned for updates!</p>
        </div>
      </section>
    </>
  );
}
