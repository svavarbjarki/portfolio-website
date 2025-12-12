import Head from 'next/head';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Meal Plan Generator",
    subtitle: "Personalized meal plans from goals & preferences",
    description:
      "A web solution that generates personalized meal plans based on the user’s goals and preferences. Built as a full-stack application with authentication (Auth0), Prisma ORM, and data processing driven by user input.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Auth0"],
    cover: "/images/mealplanner.png",
    links: { demo: "https://mealplan.svavarbjarki.com" },
  },
  {
    title: "Fake News Analysis System",
    subtitle: "AI-Powered News Authenticity Verification",
    description:
      "Analyzes and detects potential fake news by comparing articles and contexts. Modern UI with side-by-side comparison and semantic similarity scoring.",
    technologies: ["Next.js", "Tailwind CSS", "ASP.NET Core 8", "PostgreSQL", "EF Core", "Docker", "MinIO", "AI/ML"],
    links: { paper: "https://hdl.handle.net/1946/50437" },
    cover: "/images/fakenewsdetector.png",
  },
  {
    title: "TaskBlaster",
    subtitle: "Modern Task Management with Real-time Notifications",
    description:
      "Task tracking for teams with live updates, auth, and a clean UI. Microservices split responsibilities for tasks, notifications, and users.",
    technologies: ["Next.js", "Chakra UI", ".NET Core", "PostgreSQL", "Docker", "Auth0", "Mailjet"],
    links: { github: "https://github.com/your-repo/task-blaster" },
    cover: "/images/taskblaster.webp",
  },
  {
    title: "Pizza Lair",
    subtitle: "Restaurant-style Ordering Experience",
    description:
      "Browse menus, build orders, and grab deals like 2-for-1 and family bundles. Complete auth + checkout flow.",
    technologies: ["Django", "PostgreSQL", "Python", "JavaScript", "HTML/CSS"],
    links: { github: "https://github.com/svavarbjarki/PizzaLair_9" },
    cover: "/images/pizzalair.png",
  },
  {
    title: "Doctor Cinema",
    subtitle: "Icelandic Cinema Companion (React Native)",
    description:
      "Real-time listings, cinema locations, and showtimes via kvikmyndir.is API. Trailers, details, and direct ticket purchase handoff.",
    technologies: ["React Native", "Redux Toolkit", "React Navigation", "Expo", "kvikmyndir.is API"],
    links: { github: "https://github.com/svavarbjarki/DoctorCinema" },
    cover: "/images/doctorcinema.png",
  },
  {
    title: "Tic-Tackity-Toe",
    subtitle: "Real-time Multiplayer Tic-tac-toe",
    description:
      "Play with friends with live state sync, authentication, and a clean UI built with UIkit.",
    technologies: ["React", "TypeScript", "Socket.IO", "Express", "Redux Toolkit", "UIkit"],
    links: { github: "https://github.com/svava/Vefforritun2-final-project" },
    cover: "/images/tictackitytoe.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Svavar B.</title>
        <meta name="description" content="Selected work: web, mobile, AI/ML, and game projects." />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <motion.section className={styles.hero} initial="hidden" animate="show" variants={fadeUp}>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.lead}>
              A curated selection of things I’ve built all from full-stack apps, mobile, AI/ML, and games (Find in Games tab).
            </p>
          </motion.section>

          <motion.section className={styles.section} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>All Projects</h2>
              <span className={styles.count}>{projects.length} total</span>
            </div>

            <div className={styles.grid}>
              {projects.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </div>
          </motion.section>

          <motion.section className={styles.ctaSection} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className={styles.ctaTitle}>Want to know more?</h2>
            <p className={styles.ctaText}>
              I’m happy to walk through architecture, code, or design decisions for any of these projects.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.primaryBtn} href="/contact">Get in touch</Link>
              <Link className={styles.secondaryBtn} href="/about">About me</Link>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.cardMedia}>
        <div className={styles.cardImgWrap}>
          <Image
            src={p.cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className={styles.cardImg}
          />
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.projectTitle}>{p.title}</h3>
        <p className={styles.projectSubtitle}>{p.subtitle}</p>
        <p className={styles.projectDescription}>{p.description}</p>
        <div className={styles.tagsRow}>
          {p.technologies.map((t, i) => (
            <span className={styles.tag} key={`${t}-${i}`}>{t}</span>
          ))}
        </div>

        <div className={styles.linksRow}>
          {p.links?.github && (
            <a className={styles.linkBtn} target="_blank" rel="noopener noreferrer" href={p.links.github}>
              GitHub
            </a>
          )}
          {p.links?.demo && (
            <a className={styles.linkBtn} target="_blank" rel="noopener noreferrer" href={p.links.demo}>
              Live Demo
            </a>
          )}
          {p.links?.paper && (
            <a className={styles.linkBtn} target="_blank" rel="noopener noreferrer" href={p.links.paper}>
              Paper
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
