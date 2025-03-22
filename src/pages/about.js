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
            {/* Profile Section */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Profile</h2>
              <div className={styles.profileBox}>
                I'm a 24 year old student at Reykjavík University, studying Computer Science. I'm passionate about programming and game development.
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.educationBox}>
                Reykjavík University, Computer Science
                Courses:
                Discrete Math 1 & 2
                Webprogramming 1 & 2
                Databases
                Algorithms
                Webservices
                Business Intellegence
                Programming in C++
                Computer Networks
                Programming Languages
                Operating Systems
                Artificial Intellegence
                Game Design
                Advanced Game Design

              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.skillsBox}>
                [List your technical skills, including:
                - Programming languages
                - Frameworks and tools
                - Areas of expertise
                - Any other relevant skills]
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.experienceBox}>
                [List your relevant experience, including:
                - Any internships
                - Personal projects
                - Academic projects
                - Work experience if any]
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Interests</h2>
              <div className={styles.interestsBox}>
                [Share your interests and passions, including:
                - Areas of technology you're passionate about
                - Hobbies and activities
                - Future goals and aspirations]
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <div className={styles.contactBox}>
                [Add your preferred contact methods:
                - Email
                - LinkedIn
                - GitHub
                - Any other relevant contact information]
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
