// components/Footer.js
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://github.com/svavarbjarki" target="_blank" rel="noopener noreferrer">
            <img src="/icons/githubicon.png" alt="GitHub" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/svavar-bjarki-bjarnason-32b2241a1/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedinicon.png" alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
