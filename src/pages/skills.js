import Head from 'next/head';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Svavar B.</title>
        <meta name="description" content="Explore my technical skills and expertise" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h1>

          <div className={styles.content}>
            {/* Programming Languages */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Programming Languages</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillTitle}>[Language Name]</h3>
                  <div className={styles.skillLevel}>[Beginner/Intermediate/Advanced]</div>
                  <div className={styles.skillDescription}>
                    [Brief description of your experience with this language]
                  </div>
                </div>
                {/* Add more language cards as needed */}
              </div>
            </section>

            {/* Web Development */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Web Development</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillTitle}>[Framework/Technology]</h3>
                  <div className={styles.skillLevel}>[Beginner/Intermediate/Advanced]</div>
                  <div className={styles.skillDescription}>
                    [Description of your experience with this technology]
                  </div>
                </div>
                {/* Add more web development cards as needed */}
              </div>
            </section>

            {/* Game Development */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Game Development</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillTitle}>[Engine/Tool]</h3>
                  <div className={styles.skillLevel}>[Beginner/Intermediate/Advanced]</div>
                  <div className={styles.skillDescription}>
                    [Description of your experience with this tool]
                  </div>
                </div>
                {/* Add more game development cards as needed */}
              </div>
            </section>

            {/* Tools & Technologies */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillTitle}>[Tool Name]</h3>
                  <div className={styles.skillLevel}>[Beginner/Intermediate/Advanced]</div>
                  <div className={styles.skillDescription}>
                    [Description of your experience with this tool]
                  </div>
                </div>
                {/* Add more tool cards as needed */}
              </div>
            </section>

            {/* Soft Skills */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Soft Skills</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillTitle}>[Soft Skill]</h3>
                  <div className={styles.skillDescription}>
                    [Description of how you apply this skill]
                  </div>
                </div>
                {/* Add more soft skill cards as needed */}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
} 