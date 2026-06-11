import Head from 'next/head';
import Terminal from '../components/Terminal';
import styles from '../styles/Terminal.module.css';
import {
  identity,
  aboutText,
  skillCategories,
  projects,
  games,
  contact,
} from '../data/portfolio';

const featuredProjects = projects.slice(0, 3);

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

          {/* Projects */}
          <section id="projects" className={styles.section}>
            <SectionMarker>projects</SectionMarker>
            <div className={styles.projectGrid}>
              {featuredProjects.map((p) => (
                <article key={p.name} className={styles.card}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <p className={styles.cardDesc}>{p.blurb}</p>
                  <div className={styles.cardTags}>
                    {p.tech.map((t) => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      className={styles.cardLink}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.linkLabel} →
                    </a>
                  )}
                </article>
              ))}
            </div>
            <p className={styles.projectHint}>
              <span className={styles.dim}>Run</span>{' '}
              <span className={styles.accent}>projects</span>{' '}
              <span className={styles.dim}>in the terminal above to see the full list.</span>
            </p>
          </section>

          {/* Games */}
          <section id="games" className={styles.section}>
            <SectionMarker>games</SectionMarker>
            <div className={styles.projectGrid}>
              {games.map((g) => (
                <article key={g.name} className={styles.card}>
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardName}>{g.name}</h3>
                    <span className={styles.cardYear}>{g.year}</span>
                  </div>
                  <p className={styles.cardDesc}>{g.blurb}</p>
                  <div className={styles.cardTags}>
                    {g.tags.map((t) => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                  </div>
                  <a
                    className={styles.cardLink}
                    href={g.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play on itch.io →
                  </a>
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
              <a className={styles.contactLink} href={`mailto:${contact.email}`}>
                <span className={styles.contactKey}>email</span>
                {contact.email}
              </a>
              <a className={styles.contactLink} href={contact.github} target="_blank" rel="noopener noreferrer">
                <span className={styles.contactKey}>github</span>
                {contact.githubLabel}
              </a>
              <a className={styles.contactLink} href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <span className={styles.contactKey}>linkedin</span>
                {contact.linkedinLabel}
              </a>
            </div>
          </section>

          <footer className={styles.footer}>
            <span className={styles.dim}>
              {identity.name} · built with Next.js · {new Date().getFullYear()}
            </span>
          </footer>
        </main>
      </div>
    </>
  );
}
