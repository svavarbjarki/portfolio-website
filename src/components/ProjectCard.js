import Link from 'next/link';
import styles from '../styles/Terminal.module.css';
import { STATUS } from '../data/portfolio';
import StatusBadge from './StatusBadge';
import GitHubLink from './GitHubLink';

// Unified project card: name + status badge, description, tech tags, and a footer
// with a details link, a "visit" link when the project is live, and GitHub handling.
export default function ProjectCard({ project: p }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardName}>{p.name}</h3>
        <StatusBadge status={p.status} />
      </div>
      <p className={styles.cardDesc}>{p.blurb}</p>
      <div className={styles.cardTags}>
        {p.tech.map((t) => (
          <span key={t} className={styles.cardTag}>{t}</span>
        ))}
      </div>
      <div className={styles.cardFooter}>
        <Link className={styles.cardLink} href={`/projects/${p.slug}`}>
          details →
        </Link>
        <div className={styles.cardActions}>
          {p.status === STATUS.LIVE && p.liveUrl && (
            <a
              className={styles.cardVisit}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              visit →
            </a>
          )}
          {/* TODO: set the repo URL in portfolio.js to turn this into a live link. */}
          <GitHubLink url={p.github} status={p.status} />
        </div>
      </div>
    </article>
  );
}
