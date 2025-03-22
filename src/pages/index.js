import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Svavar_Bjarki_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Svavar B. | Portfolio</title>
        <meta name="description" content="Computer Science Student Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.profilePicContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <Image
              src="/icons/profilepic.jpg"
              alt="Profile Picture"
              width={200}
              height={300}
              className={styles.profilePic}
            />
          </motion.div>

          <div className={styles.heroText}>
            <h1 className={styles.title}>Hi, I'm Svavar Bjarki</h1>
            <p className={styles.subtitle}>Computer Science Student <br/>Aspiring Software Developer<br/>Hobby Game Developer</p>
            <div className={styles.buttons}>
              <a href="/projects" className={styles.btnPrimary}>View My Projects</a>
              <button onClick={handleResumeDownload} className={styles.btnSecondary}>Download Resume</button>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
