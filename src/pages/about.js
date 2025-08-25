import Head from 'next/head';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Svavar B.</title>
        <meta name="description" content="Learn more about me, my skills, education, and experience." />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>

          {/* Hero */}
          <motion.section
            className={styles.hero}
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div className={styles.heroMedia} variants={fadeUp}>
              <div className={styles.avatarWrap}>
                <Image
                  src="/icons/profilepic.jpg"
                  alt="Portrait of Svavar B."
                  fill
                  sizes="(max-width: 768px) 160px, 220px"
                  priority
                  className={styles.avatar}
                />
              </div>
            </motion.div>

            <motion.div className={styles.heroText} variants={fadeUp}>
              <h1 className={styles.title}>About Me</h1>
              <p className={styles.lead}>
                I´m a recent Computer Science graduate from Reykjavík University (2025), passionate about programming and game development.

              </p>

              <div className={styles.heroCtas}>
                <a className={styles.secondaryBtn} href="/files/SvavarB_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
                <Link className={styles.secondaryBtn} href="/projects">View Projects</Link>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>24</span>
                  <span className={styles.statLabel}>Age</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>3+</span>
                  <span className={styles.statLabel}>Years Coding</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>7+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Quick Profile */}
          <motion.section className={styles.section} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h2 className={styles.sectionTitle}>Profile</h2>
            <div className={styles.richText}>
              <p>
                I’m a 24-year-old CS student at Reykjavík University, graduating spring 2025. I’m
                passionate about programming and game development, and I enjoy turning ideas into
                polished, interactive experiences.
              </p>
              <ul className={styles.quickList}>
                <li><strong>Location:</strong> Kópavogur, Iceland</li>
                <li><strong>Focus areas:</strong> Backend, Full-stack, Game Dev</li>
                <li><strong>Currently working on:</strong> Meal Plan Generator</li>
              </ul>
            </div>
          </motion.section>

          <motion.section className={styles.section} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.eduCard}>
              <div className={styles.eduHeader}>
                <Image src="/images/ru-logo.png" alt="Reykjavík University" width={48} height={48} />
                <div>
                  <h3 className={styles.eduTitle}>Reykjavík University — BSc Computer Science</h3>
                  <p className={styles.eduMeta}>Expected Spring 2025</p>
                </div>
              </div>
              <div className={styles.courseGrid}>
                {[
                  'Programming', 'Discrete Math I & II', 'Web Programming I & II', 'Databases',
                  'Algorithms', 'Web Services', 'Software Engineering', 'Business Intelligence',
                  'C++ Programming', 'Computer Networks', 'Programming Languages',
                  'Operating Systems', 'Artificial Intelligence', 'Game Design',
                  'Advanced Game Design', 'App Development'
                ].map((c) => (
                  <span key={c} className={styles.courseTag}>{c}</span>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section className={styles.section} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h2 className={styles.sectionTitle}>Beyond the Screen</h2>
            <p className={styles.sectionIntro}>
              I am a big fan of Football and especially Liverpool FC. 
              Recently i have been very into fitness and am loving it! 
              Game Development is a big passion of mine and I love creating my own games and worlds.
              Living in Iceland is amazing and I love to explore the beautiful nature this country has to offer.
            </p>
            <div className={styles.gallery}>
              {[
                { src: '/images/liverpool.jpg', alt: 'Liverpool FC.' },
                { src: '/images/gamedev.jpg', alt: 'Game development workspace' },
                { src: '/images/fitness.jpg', alt: 'Fitness' },
                { src: '/images/iceland.jpg', alt: 'Icelandic landscape' }
              ].map((img) => (
                <div className={styles.galleryItem} key={img.src}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 33vw" className={styles.galleryImg}/>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section className={styles.ctaSection} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h2 className={styles.ctaTitle}>Let’s Build Something Great</h2>
            <p className={styles.ctaText}>
              I’m open to internships, junior roles, and collaborations.
            </p>
            <div className={styles.heroCtas}>
              <Link className={styles.primaryBtn} href="/contact">Get in Touch</Link>
              <Link className={styles.secondaryBtn} href="/projects">See My Work</Link>
            </div>
          </motion.section>

        </main>
      </div>
    </>
  );
}
