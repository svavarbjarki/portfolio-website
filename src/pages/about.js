// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.aboutSection}>
        <div className={styles.topSection}>
          <img src="icons/profilepic.jpg" alt="Profile Picture" className={styles.profileImage} />
          <div className={styles.shortDescription}>
            <h1 className={styles.title}>Hello, I'm Svavar Bjarki Bjarnason</h1>
            <p className={styles.subtitle}>I am a university student pursuing a Computer Science degree.</p>
          </div>
        </div>

        {/* Longer Text Section */}
        <div className={styles.longDescription}>
          <p>
            I specialize in frontend development, working with modern frameworks like React, Vue, and Angular. I also have experience with backend technologies such as Node.js and Express. With a strong foundation in both frontend and backend, I create full-stack applications that are scalable, secure, and user-friendly.
          </p>
          <p>
            Beyond programming, I enjoy contributing to open-source projects, mentoring new developers, and exploring emerging technologies. My goal is to continuously improve my skills and contribute to meaningful projects that have a positive impact.
          </p>
        </div>
      </section>
    </div>
  );
}
