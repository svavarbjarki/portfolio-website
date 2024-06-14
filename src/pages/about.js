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
            Hi, I'm Svavar Bjarnason, a passionate software developer based in [Your Location]. I specialize in building high-quality web applications using modern technologies. With a strong background in computer science and years of experience in the industry, I thrive on solving complex problems and creating innovative solutions.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Skills</h2>
          <ul className={styles.skillsList}>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
            <li>RESTful APIs</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Experience</h2>
          <p>
            I have worked on numerous projects ranging from small business websites to large-scale applications. My experience includes:
            <ul>
              <li>Developing user-friendly interfaces with React.js and Next.js.</li>
              <li>Building scalable back-end services with Node.js.</li>
              <li>Collaborating with cross-functional teams to deliver high-quality products.</li>
            </ul>
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Education</h2>
          <p>
            I hold a degree in Computer Science from [Your University]. My academic background has provided me with a solid foundation in software development principles and practices.
          </p>
        </section>
      </main>
    </div>
  );
}
