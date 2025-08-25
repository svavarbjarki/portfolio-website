import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const navItems = ['Home', 'About', 'Projects', 'Games', 'Skills', 'Contact'];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">svavarb.</Link>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
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

        <label className={styles.darkModeToggle} aria-label="Toggle dark mode">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            aria-checked={darkMode}
          />
          <span className={styles.slider}>
            <motion.span
              className={styles.knob}
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              animate={{ x: darkMode ? 24 : 0 }}
            />
          </span>
        </label>
      </div>
    </header>
  );
}
