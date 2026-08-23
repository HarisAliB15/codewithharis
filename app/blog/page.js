import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
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
      <PageHero
        eyebrow="Writing"
        title="Blog"
        subtitle="Thoughts on development, technology, and building products that last."
      />

      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className={`premiumCard ${styles.blogCard}`}>
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
                  <span className="cardEyebrow">{post.tag}</span>
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

      <PageCta
        badgeIcon="rocket"
        badge="Let's Work Together"
        title="Ready to elevate your digital presence?"
        subtitle="Share your idea and I'll shape a clear path from concept to launch."
        buttonText="Let's talk"
      />
    </>
  );
}
