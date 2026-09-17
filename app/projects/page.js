import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Explore web development projects built by Haris Ali using Next.js, React and modern technologies.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ parent: 'Home', href: '/', current: 'Projects' }}
        eyebrow="Portfolio"
        title="Selected work"
        subtitle="Shipped products and client builds — mobile apps, web platforms, and full-stack experiences with clean architecture and production-ready delivery."
        stats={[
          { value: `${projects.length}`, label: 'Showcase projects' },
          { value: 'Web & mobile', label: 'Primary focus' },
          { value: 'React · Next.js', label: 'Core stack' },
        ]}
      />

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
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
