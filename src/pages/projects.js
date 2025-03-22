// pages/projects.js
import Head from 'next/head';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, featuring a responsive design, dark mode, and smooth animations. The site showcases my projects, skills, and professional information. Built with modern web technologies and best practices.",
    technologies: ["Next.js", "React", "CSS Modules", "Framer Motion", "JavaScript", "GitHub Pages"],
    githubLink: "https://github.com/svavarbjarki/portfolio-website",
    image: "/icons/portfolio-preview.svg",
    features: [
      "Responsive design for all devices",
      "Dark/Light mode toggle",
      "Smooth page transitions",
      "Project showcase",
      "Contact information"
    ]
  },
  {
    title: "Vefforritun2 Final Project",
    description: "A comprehensive web development project for the Vefforritun2 course, demonstrating full-stack development skills with modern web technologies. The project showcases practical implementation of web development concepts and best practices.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Web Development"],
    githubLink: "https://github.com/svavarbjarki/Vefforritun2-final-project",
    image: "/icons/web-dev-preview.svg",
    features: [
      "Full-stack web application",
      "Database integration",
      "User authentication",
      "RESTful API design",
      "Modern frontend implementation"
    ]
  },
  {
    title: "Level Design AGDD",
    description: "An advanced game design project developed for the Advanced Game Design & Development course at Reykjavík University. This project focuses on implementing core game design principles and mechanics using ASP.NET. The project demonstrates understanding of game design fundamentals and practical implementation.",
    technologies: ["ASP.NET", "Game Design", "Level Design", "C#", "Unity"],
    githubLink: "https://github.com/svavarbjarki/LevelDesignAGDD",
    image: "/icons/game-design-preview.svg",
    features: [
      "Game level design principles",
      "Player mechanics implementation",
      "Level progression system",
      "Game balance considerations",
      "User experience optimization"
    ]
  },
  {
    title: "Programming HR",
    description: "A collection of programming assignments and projects from HR (Háskólinn í Reykjavík). These projects demonstrate fundamental programming concepts, algorithms, and problem-solving skills. The repository contains various programming exercises and solutions.",
    technologies: ["Programming", "Algorithms", "Data Structures", "Java", "Problem Solving"],
    githubLink: "https://github.com/svavarbjarki/forritun_hr",
    image: "/icons/programming-preview.svg",
    features: [
      "Algorithm implementations",
      "Data structure exercises",
      "Programming fundamentals",
      "Problem-solving solutions",
      "Code optimization"
    ]
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Svavar B.</title>
        <meta name="description" content="My programming and game development projects" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.features}>
                    <h3 className={styles.featuresTitle}>Key Features:</h3>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature) => (
                        <li key={feature} className={styles.featureItem}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
  