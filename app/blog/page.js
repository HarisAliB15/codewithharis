import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog',
  description: 'Read articles about web development, Next.js, React and the latest tech trends by Haris Ali.',
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
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="section-label">Writing</p>
          <h1 className="pageTitle">Blog</h1>
          <p className="pageSubtitle">
            Thoughts on development, technology, and building products that last.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className={styles.blogCard}>
                <div className={styles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTag}>{post.tag}</span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardDesc}>{post.desc}</p>
                  <div className={styles.cardFooter}>
                    <span>{post.date} · {post.readTime}</span>
                    <span className={styles.readMore}>Read article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaGlow" aria-hidden="true" />
        <div className="container ctaInner">
          <p className="ctaBadge">Next step</p>
          <h2 className="ctaTitle">Ready to elevate your digital presence?</h2>
          <p className="ctaSubtitle">
            Share your idea and I&apos;ll shape a clear path from concept to launch.
          </p>
          <Link href="/contact" className="btn btn-white">
            Let&apos;s talk
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
