import Head from 'next/head';
import Link from 'next/link';
import Terminal from '../components/Terminal';
import GitHubActivity from '../components/GitHubActivity';
import ContactEmail from '../components/ContactEmail';
import ProjectCard from '../components/ProjectCard';
import StatusBadge from '../components/StatusBadge';
import styles from '../styles/Terminal.module.css';
import {
  identity,
  aboutText,
  skillCategories,
  projects,
  games,
  contact,
  resumeUrl,
  STATUS,
} from '../data/portfolio';

// Update this in one place to change the "currently building" status badge.
const CURRENTLY_BUILDING = 'Bomber Game (Untitled)';

function SectionMarker({ children }) {
  return (
    <h2 className={styles.sectionTitle}>
      <span className={styles.accent}>$</span> {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Svavar Bjarki — Portfolio</title>
        <meta name="description" content="Svavar Bjarki — Computer Science graduate, software developer, and hobby game developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Dark background for the whole viewport, scoped to the home route. */}
      <style jsx global>{`
        body {
          background: #0e0e0e;
        }
      `}</style>

      <div className={styles.page}>
        <header className={styles.nav}>
          <a href="#top" className={styles.logo}>
            {identity.handle}
            <span className={styles.accent}>.</span>
          </a>
          <nav className={styles.navLinks}>
            <a href="#skills" className={styles.navLink}>skills</a>
            <a href="#projects" className={styles.navLink}>projects</a>
            <a href="#games" className={styles.navLink}>games</a>
            <a href="#about" className={styles.navLink}>about</a>
            <a href="#contact" className={styles.navLink}>contact</a>
          </nav>
        </header>

        <main className={styles.container}>
          {/* Hero — interactive terminal */}
          <section id="top" className={styles.hero}>
            <p className={styles.heroIntro}>
              <span className={styles.accent}>{identity.handle}</span>
              <span className={styles.dim}> — interactive portfolio</span>
            </p>
            <Terminal />
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.dim}>currently building: </span>
              <span className={styles.statusProject}>{CURRENTLY_BUILDING}</span>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className={styles.section}>
            <SectionMarker>skills</SectionMarker>
            <div className={styles.skillGroups}>
              {skillCategories.map((cat) => (
                <div key={cat.label} className={styles.skillGroup}>
                  <h3 className={styles.skillLabel}>{cat.label}</h3>
                  <div className={styles.tagRow}>
                    {cat.items.map((item) => (
                      <span key={item} className={styles.tag}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GitHub activity */}
          <section id="activity" className={styles.section}>
            <SectionMarker>activity (public repos)</SectionMarker>
            <GitHubActivity />
          </section>

          {/* Projects */}
          <section id="projects" className={styles.section}>
            <SectionMarker>projects</SectionMarker>
            <div className={styles.projectGrid}>
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>

          {/* Games */}
          <section id="games" className={styles.section}>
            <SectionMarker>games</SectionMarker>
            <div className={styles.projectGrid}>
              {games.map((g) => (
                <article key={g.name} className={styles.card}>
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardName}>{g.name}</h3>
                    <StatusBadge status={g.status} />
                  </div>
                  <p className={styles.cardDesc}>{g.blurb}</p>
                  <div className={styles.cardTags}>
                    {g.tags.map((t) => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    {g.status === STATUS.IN_DEVELOPMENT && g.slug ? (
                      <Link className={styles.cardLink} href={`/projects/${g.slug}`}>
                        details →
                      </Link>
                    ) : g.link ? (
                      <a
                        className={styles.cardLink}
                        href={g.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play on itch.io →
                      </a>
                    ) : null}
                    {g.year && <span className={styles.cardYear}>{g.year}</span>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className={styles.section}>
            <SectionMarker>about</SectionMarker>
            <p className={styles.aboutText}>{aboutText}</p>
          </section>

          {/* Contact */}
          <section id="contact" className={styles.section}>
            <SectionMarker>contact</SectionMarker>
            <div className={styles.contactLinks}>
              <ContactEmail />
              <a className={styles.contactLink} href={contact.github} target="_blank" rel="noopener noreferrer">
                <span className={styles.contactKey}>github</span>
                {contact.githubLabel}
              </a>
              <a className={styles.contactLink} href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <span className={styles.contactKey}>linkedin</span>
                {contact.linkedinLabel}
              </a>
            </div>

            <a className={styles.resumeLink} href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <span className={styles.downloadArrow} aria-hidden="true">↓</span>
              download résumé
            </a>
          </section>

          <footer className={styles.footer}>
            <span className={styles.dim}>
              {identity.name} · built with Next.js · {new Date().getFullYear()}
            </span>
            <span className={styles.footerSep}>·</span>
            <Link href="/uses" className={styles.footerLink}>uses</Link>
          </footer>
        </main>
      </div>
    </>
  );
}
