import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.pageHeroGlow} aria-hidden="true" />
      <div className={`container ${styles.pageHeroInner}`}>
        {eyebrow && <p className={styles.pageHeroEyebrow}>{eyebrow}</p>}
        <h1 className={styles.pageHeroTitle}>{title}</h1>
        {subtitle && <p className={styles.pageHeroSubtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
