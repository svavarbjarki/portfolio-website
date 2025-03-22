import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">svavarb.</Link>
      </div>

      <nav className={styles.nav}>
        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isActive = router.pathname === path;
          return (
            <Link key={item} href={path} legacyBehavior>
              <a className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                <span>{item}</span>
                <span className={styles.underline}></span>
              </a>
            </Link>
          );
        })}
      </nav>


      <div className={styles.links}>
        <a href="https://github.com/svavarbjarki" target="_blank" rel="noopener noreferrer">
          <img src="/icons/githubicon.png" alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/svavar-bjarki-bjarnason-32b2241a1/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedinicon.png" alt="LinkedIn" className={styles.icon} />
        </a>
        <button onClick={toggleDarkMode} className={styles.darkModeBtn}>
        <AnimatePresence mode="wait" initial={false}>
          {darkMode ? (
            <motion.span
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              🌙
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              ☀️
            </motion.span>
          )}
        </AnimatePresence>

        </button>
      </div>
    </header>
  );
}
