// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>
        <p className={styles.description}>
          This is where I showcase my work and projects.
        </p>
      </main>
    </div>
  );
}
