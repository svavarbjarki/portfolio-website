// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Svavar Bjarnason</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={router.pathname === '/' ? styles.active : ''}>Home</Link>
          <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>About</Link>
          <Link href="/projects" className={router.pathname === '/projects' ? styles.active : ''}>Projects</Link>
          <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
