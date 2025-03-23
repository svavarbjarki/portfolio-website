import Head from 'next/head';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';

const skills = {
  programmingLanguages: [
    {
      name: "Python",
      description: "Core programming language used for backend development and server-side logic. Experience with Django framework and web development.",
      level: "Intermediate"
    },
    {
      name: "JavaScript/TypeScript",
      description: "Proficient in modern JavaScript and TypeScript for frontend development, including React, React Native, and real-time applications.",
      level: "Intermediate"
    },
    {
      name: "C#",
      description: "Experience with C# for backend development using ASP.NET Core and game development.",
      level: "Intermediate"
    },
    {
      name: "C++",
      description: "Strong foundation in C++ programming, including object-oriented programming and memory management.",
      level: "Intermediate"
    },
    {
      name: "C",
      description: "Understanding of low-level programming concepts and system programming in C.",
      level: "Intermediate"
    },
    {
      name: "HTML",
      description: "Expertise in creating semantic and accessible web structures using modern HTML5 standards.",
      level: "Advanced"
    },
    {
      name: "CSS",
      description: "Proficient in modern CSS3, including Flexbox, Grid, animations, and responsive design principles.",
      level: "Advanced"
    }
  ],
  webDevelopment: [
    {
      name: "React/Next.js",
      description: "Building modern, responsive web applications with React and Next.js, including server-side rendering and component-based architecture.",
      level: "Intermediate"
    },
    {
      name: "Django",
      description: "Developing robust backend systems with Django framework, including ORM, admin interface, and RESTful APIs.",
      level: "Intermediate"
    },
    {
      name: "ASP.NET Core",
      description: "Creating scalable backend APIs using ASP.NET Core 8.0 with clean architecture principles.",
      level: "Intermediate"
    },
    {
      name: "HTML/CSS",
      description: "Structuring and styling web applications with modern HTML5 and CSS3, including responsive design and CSS modules.",
      level: "Advanced"
    }
  ],
  mobileDevelopment: [
    {
      name: "React Native",
      description: "Building cross-platform mobile applications with React Native, including native UI components and performance optimization.",
      level: "Intermediate"
    },
    {
      name: "Expo",
      description: "Utilizing Expo for streamlined mobile app development, testing, and deployment.",
      level: "Intermediate"
    }
  ],
  databases: [
    {
      name: "PostgreSQL",
      description: "Working with PostgreSQL for data storage and management, including database design and optimization.",
      level: "Intermediate"
    },
    {
      name: "Entity Framework Core",
      description: "Using Entity Framework Core for database operations and data modeling in .NET applications.",
      level: "Intermediate"
    }
  ],
  toolsAndTechnologies: [
    {
      name: "Unity",
      description: "Game development using Unity engine, including 2D and 3D game creation, physics, and asset management.",
      level: "Intermediate"
    },
    {
      name: "Docker",
      description: "Containerization and deployment of applications using Docker for consistent environments.",
      level: "Intermediate"
    },
    {
      name: "Git/GitHub",
      description: "Version control and collaboration using Git and GitHub for project management.",
      level: "Advanced"
    },
    {
      name: "Socket.IO",
      description: "Implementing real-time bidirectional communication for live applications.",
      level: "Intermediate"
    },
    {
      name: "Redux Toolkit",
      description: "State management in React applications using Redux Toolkit for efficient data flow.",
      level: "Intermediate"
    }
  ],
  softSkills: [
    {
      name: "Problem Solving",
      description: "Strong analytical and problem-solving abilities demonstrated through various project implementations."
    },
    {
      name: "Team Collaboration",
      description: "Experience working in team environments and collaborating on complex projects."
    },
    {
      name: "Project Management",
      description: "Managing projects from conception to completion, including planning, development, and deployment."
    },
    {
      name: "Scrum",
      description: "Experience with Agile/Scrum methodologies, including sprint planning, daily standups, and sprint retrospectives."
    }
  ]
};

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
                {skills.programmingLanguages.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <h3 className={styles.skillTitle}>{skill.name}</h3>
                    <div className={styles.skillLevel}>{skill.level}</div>
                    <div className={styles.skillDescription}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Web Development */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Web Development</h2>
              <div className={styles.skillsGrid}>
                {skills.webDevelopment.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <h3 className={styles.skillTitle}>{skill.name}</h3>
                    <div className={styles.skillLevel}>{skill.level}</div>
                    <div className={styles.skillDescription}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile Development */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Mobile Development</h2>
              <div className={styles.skillsGrid}>
                {skills.mobileDevelopment.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <h3 className={styles.skillTitle}>{skill.name}</h3>
                    <div className={styles.skillLevel}>{skill.level}</div>
                    <div className={styles.skillDescription}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Databases */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Databases</h2>
              <div className={styles.skillsGrid}>
                {skills.databases.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <h3 className={styles.skillTitle}>{skill.name}</h3>
                    <div className={styles.skillLevel}>{skill.level}</div>
                    <div className={styles.skillDescription}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools & Technologies */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
              <div className={styles.skillsGrid}>
                {skills.toolsAndTechnologies.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <h3 className={styles.skillTitle}>{skill.name}</h3>
                    <div className={styles.skillLevel}>{skill.level}</div>
                    <div className={styles.skillDescription}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Soft Skills</h2>
              <div className={styles.skillsGrid}>
                {skills.softSkills.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <h3 className={styles.skillTitle}>{skill.name}</h3>
                    <div className={styles.skillDescription}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
} 