import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog - Code With Haris',
  description: 'Read the latest insights and articles from Code With Haris.',
};

const posts = [
  {
    id: 'ai-bubble-openai-oracle',
    title: 'The AI Bubble: Is OpenAI Manipulating Oracle and Other Tech Giants?',
    desc: 'An in-depth analysis on the current AI industry dynamics, examining the relationships between major AI players and enterprise tech giants, and whether we are living in a speculative bubble.',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    tag: 'Technology',
    image: '/blog-ai-bubble.jpg',
  }
];

export default function BlogPage() {
  return (
    <>
      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className={styles.blogCard}>
                <div className={styles.cardImage}>
                  {post.image ? (
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)' }}>{post.emoji || '📰'}</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTag}>{post.tag}</span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardDesc}>{post.desc}</p>
                  <div className={styles.cardFooter}>
                    <span>{post.date} • {post.readTime}</span>
                    <span className={styles.readMore}>Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Reused */}
      <section className="ctaSection">
        <div className="ctaGlow" />
        <div className="container ctaInner">
          <p className="ctaBadge">🚀 Let&apos;s Work Together</p>
          <h2 className="ctaTitle">Ready to Elevate Your Digital Presence?</h2>
          <p className="ctaSubtitle">Bring your vision to life with Code With Haris. Collaborate with our experts and create your next successful project today!</p>
          <Link href="/contact" className="btn btn-white">
            Let&apos;s Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
