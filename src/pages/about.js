// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - Svavar Bjarnason</title>
        <meta name="description" content="Learn more about Svavar Bjarnason" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Bio</h2>
          <p>
            Hi, I'm Svavar Bjarki Bjarnason, a passionate software developer based in Iceland. I am currently pursuing a Bachelor degree in computer science at Reykjavík University. I am on my last year and will graduate in the spring of 2025.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Skills</h2>
          <ul className={styles.skillsList}>
            <li>Python</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
            <li>C++ & C</li>
            <li>Unity</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
