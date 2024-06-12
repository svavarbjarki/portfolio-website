// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Hi, I'm Svavar Bjarki Bjarnason, a CS student based in Iceland currently studying in Háskólinn í Reykjavík.
        </p>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Bio</h2>
          <p>
            [Write a brief bio about yourself. Include your background, interests, and what drives you in your profession.]
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Skills</h2>
          <ul className={styles.skillsList}>
            <li>Python</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>C++</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Experience</h2>
          <p>
            [Detail your professional experience, projects you've worked on, and any notable achievements.]
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Education</h2>
          <p>
            [Provide information about your educational background, degrees, certifications, etc.]
          </p>
        </section>
      </main>
    </div>
  );
}
