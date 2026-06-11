import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Terminal.module.css';
import { identity, STATUS } from '../data/portfolio';
import GitHubLink from './GitHubLink';
import StatusBadge from './StatusBadge';

// Shared layout for a single project detail page. Matches the portfolio's dark,
// terminal-inspired visual language exactly (same module styles).
export default function ProjectDetail({ project }) {
  const showVisit = project.status === STATUS.LIVE && Boolean(project.liveUrl);
  // GitHubLink renders something when there's a repo URL or the project is in development.
  const showGit = Boolean(project.github) || project.status === STATUS.IN_DEVELOPMENT;

  return (
    <>
      <Head>
        <title>{`${project.name} — ${identity.name}`}</title>
        <meta name="description" content={project.blurb} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Dark background for the whole viewport, scoped to this route. */}
      <style jsx global>{`
        body {
          background: #0e0e0e;
        }
      `}</style>

      <div className={styles.page}>
        <header className={styles.nav}>
          <Link href="/#projects" className={styles.logo}>
            ← back
          </Link>
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>home</Link>
          </nav>
        </header>

        <main className={styles.container}>
          <article className={styles.detail}>
            <h1 className={styles.detailTitle}>{project.name}</h1>

            {project.status && (
              <p className={styles.statusLine}>
                <span className={styles.dim}>status:</span>
                <StatusBadge status={project.status} />
              </p>
            )}

            <p className={styles.detailDesc}>{project.longDescription}</p>

            <section className={styles.detailSection}>
              <h2 className={styles.detailLabel}>Stack</h2>
              <div className={styles.cardTags}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.cardTag}>{t}</span>
                ))}
              </div>
            </section>

            {project.highlights?.length > 0 && (
              <section className={styles.detailSection}>
                <h2 className={styles.detailLabel}>Highlights</h2>
                <ul className={styles.highlightList}>
                  {project.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <span className={styles.highlightMarker} aria-hidden="true">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {(showVisit || project.extraLink || showGit) && (
              <section className={styles.detailSection}>
                <h2 className={styles.detailLabel}>Links</h2>
                <div className={styles.detailActions}>
                  {showVisit && (
                    <a
                      className={styles.detailVisit}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      visit project →
                    </a>
                  )}
                  {project.extraLink && (
                    <a
                      className={styles.cardLink}
                      href={project.extraLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.extraLink.label} →
                    </a>
                  )}
                  {/* TODO: once the repo URL is set on this project in portfolio.js,
                      GitHubLink automatically becomes a live link. */}
                  <GitHubLink url={project.github} status={project.status} />
                </div>
              </section>
            )}
          </article>

          <footer className={styles.footer}>
            <Link href="/#projects" className={styles.footerLink}>← back to projects</Link>
          </footer>
        </main>
      </div>
    </>
  );
}
