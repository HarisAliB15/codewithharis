'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/projects/page.module.css';

export default function ProjectCard({ project }) {
  const thumb = (
    <div className={styles.projectThumb}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className={styles.projectPlaceholder}>
          <span>{project.name.charAt(0)}</span>
        </div>
      )}
    </div>
  );

  const info = (
    <div className={styles.projectInfo}>
      <span className="cardEyebrow">{project.tag}</span>
      <h3 className={styles.projectName}>{project.name}</h3>
      {project.tagline && <p className={styles.projectTagline}>{project.tagline}</p>}
      <p className={styles.projectDesc}>{project.desc}</p>
      {project.techTags?.length > 0 && (
        <div className={styles.projectTags}>
          {project.techTags.map((tech) => (
            <span key={tech} className={styles.projectTag}>{tech}</span>
          ))}
        </div>
      )}
    </div>
  );

  if (project.slug) {
    return (
      <article className={`premiumCard ${styles.projectCard}`}>
        <Link href={`/projects/${project.slug}`} className={styles.projectCardLink}>
          {thumb}
          {info}
        </Link>
        <div className={styles.projectLinks}>
          <Link href={`/projects/${project.slug}`}>View Case Study →</Link>
          {project.playStoreUrl && (
            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
              Google Play →
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className={`premiumCard ${styles.projectCard}`}>
      {thumb}
      {info}
    </article>
  );
}
