import { techStack } from '@/lib/techStack';
import styles from './TechMarquee.module.css';

export default function TechMarquee({ embedded = false }) {
  const rows = [0, 1];
  const className = `${styles.marquee} ${embedded ? styles.marqueeEmbedded : ''}`;

  const content = (
    <div className={styles.viewport}>
        <div className={styles.track}>
          {rows.map((copy) => (
            <ul
              key={copy}
              className={styles.list}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {techStack.map((tech) => (
                <li key={`${copy}-${tech}`} className={styles.item}>
                  <span>{tech}</span>
                  <span className={styles.dot} aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
  );

  if (embedded) {
    return (
      <div className={className} role="group" aria-label="Technologies I work with">
        {content}
      </div>
    );
  }

  return (
    <section className={className} aria-label="Technologies I work with">
      {content}
    </section>
  );
}
