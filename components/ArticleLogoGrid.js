import Image from 'next/image';
import styles from './ArticleLogoGrid.module.css';

export default function ArticleLogoGrid({ title, items }) {
  return (
    <div className={styles.wrap}>
      {title && <p className={styles.title}>{title}</p>}
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.name} className={styles.card}>
            <div className={styles.logoWrap}>
              {item.src.endsWith('.svg') ? (
                <img src={item.src} alt={`${item.name} logo`} className={styles.logo} />
              ) : (
                <Image
                  src={item.src}
                  alt={`${item.name} logo`}
                  width={120}
                  height={40}
                  className={styles.logo}
                />
              )}
            </div>
            <span className={styles.name}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
