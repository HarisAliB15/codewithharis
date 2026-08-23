import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import styles from './PageCta.module.css';

export default function PageCta({
  badge = 'Next step',
  badgeIcon,
  title,
  subtitle,
  buttonText = 'Get in Touch',
  buttonHref = '/contact',
}) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaGlow} aria-hidden="true" />
      <div className={`container ${styles.ctaInner}`}>
        <p className={styles.ctaBadge}>
          {badgeIcon && (
            <ServiceIcon name={badgeIcon} size="sm" onDark stageClassName={styles.ctaBadgeIcon} />
          )}
          {badge}
        </p>
        <h2 className={styles.ctaTitle}>{title}</h2>
        <p className={styles.ctaSubtitle}>{subtitle}</p>
        <Link href={buttonHref} className="btn btn-white">
          {buttonText}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
