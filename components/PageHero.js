import Link from 'next/link';
import styles from './PageHero.module.css';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  stats,
  breadcrumb,
}) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {breadcrumb && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href={breadcrumb.href || '/'}>{breadcrumb.parent || 'Home'}</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>{breadcrumb.current}</span>
          </nav>
        )}

        <div className={styles.main}>
          <div className={styles.content}>
            {eyebrow && (
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {stats?.length > 0 && (
            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <span className={styles.statValue}>{item.value}</span>
                  <span className={styles.statLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.accentBar} aria-hidden="true" />
    </section>
  );
}
