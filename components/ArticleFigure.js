import Image from 'next/image';
import styles from './ArticleFigure.module.css';

export default function ArticleFigure({
  src,
  alt,
  caption,
  credit,
  wide = false,
  aspect = 'video',
}) {
  const aspectClass = aspect === 'square' ? styles.aspectSquare : styles.aspectVideo;

  return (
    <figure className={`${styles.figure} ${wide ? styles.wide : ''}`}>
      <div className={`${styles.frame} ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={wide ? '(max-width: 1100px) 100vw, 1100px' : '(max-width: 760px) 100vw, 760px'}
          className={styles.image}
        />
      </div>
      {(caption || credit) && (
        <figcaption className={styles.caption}>
          {caption && <span className={styles.captionText}>{caption}</span>}
          {credit && <span className={styles.credit}>{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
