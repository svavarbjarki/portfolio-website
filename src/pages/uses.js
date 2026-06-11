import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Terminal.module.css';
import { identity } from '../data/portfolio';

/*
 * /uses — the gear & software I use.
 * Everything below is realistic placeholder content. To update, just edit the
 * `usesCategories` array: add/remove categories or { name, desc } entries.
 * Each `name` is the tool, each `desc` is a one-line description.
 */
const usesCategories = [
  {
    label: 'Editor',
    items: [
      { name: 'VS Code', desc: 'Daily driver for everything web and scripting.' },
      { name: 'JetBrains Rider', desc: 'When working in C# / .NET land.' },
      { name: 'JetBrains Mono', desc: 'Editor + terminal font of choice.' },
    ],
  },
  {
    label: 'Terminal',
    items: [
      { name: 'iTerm2', desc: 'Primary terminal emulator on macOS.' },
      { name: 'zsh', desc: 'Shell, lightly configured.' },
      { name: 'Git + GitHub', desc: 'Version control and where my code lives.' },
    ],
  },
  {
    label: 'Hardware',
    items: [
      { name: 'MacBook Pro', desc: 'Main development machine.' },
      { name: 'External 27" monitor', desc: 'Second screen for docs and the terminal.' },
      { name: 'Mechanical keyboard', desc: 'Tactile switches, because typing is most of the job.' },
    ],
  },
  {
    label: 'Homelab',
    items: [
      { name: 'Ubuntu Server', desc: 'Headless host for self-hosted services.' },
      { name: 'Docker', desc: 'Everything in the lab runs as a container.' },
      { name: 'Jellyfin', desc: 'Self-hosted media streaming.' },
      { name: 'Pi-hole', desc: 'Network-wide DNS ad-blocking.' },
    ],
  },
  {
    label: 'Browser & Privacy',
    items: [
      { name: 'Firefox', desc: 'Main browser for browsing and dev tools.' },
      { name: 'Mullvad VPN', desc: 'Privacy-first VPN, no account email needed.' },
      { name: 'Bitwarden', desc: 'Password manager across all devices.' },
    ],
  },
  {
    label: 'Device Management',
    items: [
      { name: 'Jamf', desc: 'Used for managing Apple devices at work.' },
    ],
  },
];

export default function Uses() {
  return (
    <>
      <Head>
        <title>{`uses — ${identity.name}`}</title>
        <meta name="description" content="The hardware, software, and tools Svavar Bjarki uses." />
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
          <Link href="/" className={styles.logo}>
            {identity.handle}
            <span className={styles.accent}>.</span>
          </Link>
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>← back</Link>
          </nav>
        </header>

        <main className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.sectionTitle}>
              <span className={styles.accent}>$</span> uses
            </h1>
            <p className={styles.aboutText}>
              The hardware, software, and tools I reach for day to day. Always evolving.
            </p>
          </section>

          {usesCategories.map((cat) => (
            <section key={cat.label} className={styles.usesSection}>
              <h2 className={styles.usesLabel}>{cat.label}</h2>
              <ul className={styles.usesList}>
                {cat.items.map((item) => (
                  <li key={item.name} className={styles.usesItem}>
                    <span className={styles.usesName}>{item.name}</span>
                    <span className={styles.usesDesc}>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <footer className={styles.footer}>
            <Link href="/" className={styles.footerLink}>← back to home</Link>
          </footer>
        </main>
      </div>
    </>
  );
}
