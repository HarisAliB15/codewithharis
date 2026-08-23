import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import styles from './page.module.css';

export const metadata = {
  title: 'About',
  description: 'Learn more about Haris Ali, a full-stack developer from Pakistan specializing in Next.js and React.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="The story behind the code"
        subtitle="Who I am, how I work, and what you can expect when we build together."
      />

      <section className="emptyState">
        <div className="container">
          <div className={`premiumCard emptyStateCard`}>
            <span className="emptyStateEmoji" aria-hidden="true">🚧</span>
            <h2 className="emptyStateTitle">Coming soon</h2>
            <p className="emptyStateDesc">
              I&apos;m putting together my story, what I stand for, and how I work as a solo developer. Check back soon!
            </p>
          </div>
        </div>
      </section>

      <PageCta
        badgeIcon="rocket"
        badge="Let's Work Together"
        title="Ready to build something great?"
        subtitle="Work directly with me — one developer, end-to-end — and ship your next project with confidence."
        buttonText="Get in Touch"
      />
    </>
  );
}
