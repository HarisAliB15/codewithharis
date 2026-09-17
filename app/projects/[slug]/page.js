import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageCta from '@/components/PageCta';
import { getCaseStudySlugs, getProjectBySlug } from '@/lib/projects';
import styles from './page.module.css';

export async function generateStaticParams() {
  return getCaseStudySlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.slug) {
    return { title: 'Project not found' };
  }

  return {
    title: `${project.name} — Case Study`,
    description: project.desc,
  };
}

function parseBuiltItem(item) {
  const colonIndex = item.indexOf(':');
  if (colonIndex === -1) {
    return { title: item, body: '' };
  }

  return {
    title: item.slice(0, colonIndex).trim(),
    body: item.slice(colonIndex + 1).trim(),
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.slug) {
    notFound();
  }

  const stackTags = project.techTags?.length
    ? project.techTags
    : project.stack.split('·').map((tag) => tag.trim());

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGridBg} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>{project.name}</span>
          </nav>

          <div className={styles.heroMain}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                {project.tag}
              </p>
              <h1 className={styles.title}>{project.name}</h1>
              <p className={styles.subtitle}>{project.caseStudyTagline}</p>

              <div className={styles.heroActions}>
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Play
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                )}
                <Link href="/projects" className="btn btn-outline">
                  ← All projects
                </Link>
              </div>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Live</span>
                <span className={styles.statLabel}>Google Play</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Solo</span>
                <span className={styles.statLabel}>Founder & engineer</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{stackTags.length}</span>
                <span className={styles.statLabel}>Core technologies</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.accentBar} aria-hidden="true" />
      </section>

      <div className={styles.heroImageSection}>
        <div className={`container ${styles.heroImageWrap}`}>
          <div className={styles.heroImageFrame}>
            <Image
              src={project.heroImage}
              alt={`${project.name} feature graphic`}
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      <section className={styles.body}>
        <div className={styles.bodyGridBg} aria-hidden="true" />
        <div className={`container ${styles.bodyInner}`}>
          <div className={styles.overviewGrid}>
            <article className={`premiumCard ${styles.overviewCard}`}>
              <span className={styles.sectionLabel}>01</span>
              <h2 className={styles.sectionTitle}>The problem</h2>
              <p className={styles.sectionText}>{project.problem}</p>
            </article>
            <article className={`premiumCard ${styles.overviewCard}`}>
              <span className={styles.sectionLabel}>02</span>
              <h2 className={styles.sectionTitle}>What it does</h2>
              <p className={styles.sectionText}>{project.whatItDoes}</p>
            </article>
          </div>

          <header className={styles.builtHeader}>
            <div className={styles.builtHeaderAccent} aria-hidden="true" />
            <div className={styles.builtHeaderGridBg} aria-hidden="true" />
            <div className={styles.builtHeaderContent}>
              <span className={styles.builtHeaderBadge}>Architecture</span>
              <h2 className={styles.builtHeaderTitle}>
                How it&apos;s <span className={styles.builtHeaderTitleAccent}>built</span>
              </h2>
              <p className={styles.builtHeaderDesc}>
                Production decisions across auth, AI, resilience, and release — shipped end to end.
              </p>
            </div>
            <div className={styles.builtHeaderMeta}>
              <div className={styles.builtHeaderStat}>
                <span className={styles.builtHeaderStatValue}>{project.howItsBuilt.length}</span>
                <span className={styles.builtHeaderStatLabel}>production layers</span>
              </div>
              <ul className={styles.builtHeaderPillars} aria-label="Build pillars">
                {project.howItsBuilt.map((item) => {
                  const { title } = parseBuiltItem(item);
                  return (
                    <li key={title} className={styles.builtHeaderPillar}>{title}</li>
                  );
                })}
              </ul>
            </div>
          </header>

          <div className={styles.builtGrid}>
            {project.howItsBuilt.map((item, index) => {
              const { title, body } = parseBuiltItem(item);
              return (
                <article key={item} className={`premiumCard ${styles.builtCard}`}>
                  <span className={styles.builtNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className={styles.builtTitle}>{title}</h3>
                  {body && <p className={styles.builtText}>{body}</p>}
                </article>
              );
            })}
          </div>

          {project.galleryImages?.length > 0 && (
            <div className={styles.gallerySection}>
              <header className={styles.galleryHeader}>
                <div className={styles.galleryHeaderGlow} aria-hidden="true" />
                <div className={styles.galleryHeaderContent}>
                  <span className={styles.galleryCount}>
                    {project.galleryImages.length} screens
                  </span>
                  <h2 className={styles.galleryTitle}>
                    See it <span className={styles.galleryTitleAccent}>in action</span>
                  </h2>
                  <p className={styles.galleryDesc}>
                    Real product flows — from first launch to daily tracking.
                  </p>
                </div>
                <div className={styles.galleryMeta}>
                  <ul className={styles.galleryFlows} aria-label="Featured app flows">
                    {['Onboarding', 'Workouts', 'Nutrition', 'Progress'].map((flow) => (
                      <li key={flow} className={styles.galleryFlow}>{flow}</li>
                    ))}
                  </ul>
                  <p className={styles.galleryScrollHint} aria-hidden="true">
                    <span>Scroll to explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </p>
                </div>
              </header>

              <div className={styles.galleryTrack}>
                {project.galleryImages.map((src, index) => (
                  <div key={src} className={styles.galleryItem}>
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 45vw, 220px"
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.stackSection}>
            <header className={styles.stackHeader}>
              <h2 className={styles.stackTitle}>Stack</h2>
              <p className={styles.stackDesc}>{project.stack}</p>
            </header>
            <div className={styles.stackTags}>
              {stackTags.map((tag) => (
                <span key={tag} className={styles.stackTag}>{tag}</span>
              ))}
            </div>
          </div>

          {project.playStoreUrl && (
            <div className={`premiumCard ${styles.playCta}`}>
              <div className={styles.playCtaContent}>
                <p className={styles.playCtaEyebrow}>Available now</p>
                <h2 className={styles.playCtaTitle}>Try Zorvale on Google Play</h2>
                <p className={styles.playCtaText}>
                  Guest mode, AI meal logging, and full workout tracking — no signup wall to get started.
                </p>
              </div>
              <a
                href={project.playStoreUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Play Store
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          )}
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
