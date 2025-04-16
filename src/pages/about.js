// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Svavar B.</title>
        <meta name="description" content="Learn more about me and my background" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Profile</h2>
              <div className={styles.profileBox}>
                I'm a 24 year old student at Reykjavík University, studying Computer Science and graduating in the spring og 2025. I'm passionate about programming and game development.
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.educationBox}>
                Reykjavík University, Computer Science graduated 2025<br/>
                Courses:<br/>
                Programming<br/>
                Discrete Math 1 & 2<br/>
                Webprogramming 1 & 2<br/>
                Databases<br/>
                Algorithms<br/>
                Webservices<br/>
                Software Engineering<br/>
                Business Intellegence<br/>
                Programming in C++<br/>
                Computer Networks<br/>
                Programming Languages<br/>
                Operating Systems<br/>
                Artificial Intellegence<br/>
                Game Design<br/>
                Advanced Game Design<br/>
                Programming languages<br/>
                App development<br/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
