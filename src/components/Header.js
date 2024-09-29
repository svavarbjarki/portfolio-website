// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>About</Link>
        <Link href="/projects" className={router.pathname === '/projects' ? styles.active : ''}>Projects</Link>
        <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
      </nav>
      <div className={styles.logo}>
        <Link href="/">svavarb.</Link>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/svavarbjarki" target="_blank" rel="noopener noreferrer">
          <img src="/icons/githubicon.png" alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/svavar-bjarki-bjarnason-32b2241a1/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedinicon.png" alt="LinkedIn" className={styles.icon} />
        </a>
      </div>
    </header>
  );
}
