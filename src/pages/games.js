import Head from 'next/head';
import styles from '../styles/Games.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const games = [
  {
    title: "Anubis Tomb of Terror",
    description: "3D Zombie shooter made in Unity in 3 weeks, for a school project.",
    thumbnail: "/images/games/anubis-thumbnail.png",
    tags: ["Unity", "Zombie Shooter", "3D", "3-Weeks"],
    itchioLink: "https://sweisen.itch.io/anubis-tomb-of-terror",
    year: "2024"
  },
  {
    title: "Moon Bounce",
    description: "2D game made in Unity in 3 days, for a school project.",
    thumbnail: "/images/games/moon-bounce-thumbnail.png",
    tags: ["Unity", "2D", "Game", "3-Days"],
    itchioLink: "https://sweisen.itch.io/moon-bounce",
    year: "2024"
  },
  {
    title: "Circle Sort",
    description: "2D game made in Unity with the objective of sorting the circles by color. The restriction was to only use one sprite.",
    thumbnail: "/images/games/circle-sort-thumbnail.png",
    tags: ["Unity", "2D", "Game", "One Sprite"],
    itchioLink: "https://sweisen.itch.io/cirlce-sort",
    year: "2025"
  }
  // Add more games here
];

export default function Games() {
  return (
    <>
      <Head>
        <title>Games | Svavar B.</title>
        <meta name="description" content="Check out my game development projects and playable games" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Games
          </motion.h1>

          <div className={styles.gamesGrid}>
            {games.map((game, index) => (
              <motion.a
                key={game.title}
                href={game.itchioLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gameCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.thumbnailContainer}>
                  <div 
                    className={styles.thumbnail}
                    style={{
                      backgroundImage: `url(${game.thumbnail})`,
                      backgroundColor: 'var(--card-background)' // Fallback color
                    }}
                  />
                </div>

                <div className={styles.gameInfo}>
                  <h2 className={styles.gameTitle}>{game.title}</h2>
                  <p className={styles.gameDescription}>{game.description}</p>
                  
                  <div className={styles.gameMeta}>
                    <div className={styles.tags}>
                      {game.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <span className={styles.year}>{game.year}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
} 