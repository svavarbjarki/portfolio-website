// pages/projects.js
import Head from 'next/head';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Fake News Analysis System",
    subtitle: "AI-Powered News Authenticity Verification",
    description: "A comprehensive system for analyzing and detecting potential fake news by comparing articles and their contexts. The project uses advanced AI and semantic analysis to identify discrepancies between original and modified content, helping users verify the authenticity of news articles. The system features a modern web interface for article comparison and provides detailed analysis of content similarities and differences.",
    technologies: [
      {
        name: "Next.js",
        description: "Used for the frontend to create a modern, responsive web application with server-side rendering capabilities."
      },
      {
        name: "Tailwind CSS",
        description: "Utilized for styling the frontend with a utility-first CSS framework, ensuring a clean and responsive design."
      },
      {
        name: "ASP.NET Core 8.0",
        description: "Powering the backend API with a robust, scalable architecture following clean architecture principles."
      },
      {
        name: "PostgreSQL",
        description: "Primary database system for storing article data, user information, and analysis results."
      },
      {
        name: "Entity Framework Core",
        description: "ORM framework for database operations and data modeling in the .NET backend."
      },
      {
        name: "Docker",
        description: "Containerization technology used to package and deploy both frontend and backend services consistently."
      },
      {
        name: "MinIO",
        description: "Object storage service for handling file uploads and media content."
      },
      {
        name: "AI/ML Services",
        description: "Integrated AI services for semantic analysis and content comparison, including cosine similarity and custom AI models for detecting differences."
      },
      {
        name: "Microservices Architecture",
        description: "Split into specialized services including audio analysis, visual analysis, and context analysis APIs."
      }
    ],
    links: {
      github: "Private"
    },
    images: ["Not provided in the codebase"]
  },
  {
    "title": "TaskBlaster",
    "subtitle": "Modern Task Management System with Real-time Notifications",
    "description": "TaskBlaster is a full-stack task management application that helps teams organize, track, and collaborate on tasks efficiently. The system features real-time notifications, secure authentication, and a modern user interface. It's built with a microservices architecture, separating concerns between task management, notifications, and user interface components.",
    "technologies": [
      {
        "name": "Next.js",
        "description": "Used for the frontend to create a modern, server-side rendered React application with excellent performance and SEO capabilities."
      },
      {
        "name": "Chakra UI",
        "description": "Provides a comprehensive component library for building a beautiful and accessible user interface."
      },
      {
        "name": ".NET Core",
        "description": "Powers the backend API and notification services, offering robust performance and enterprise-grade features."
      },
      {
        "name": "PostgreSQL",
        "description": "Serves as the primary database for storing task data and Hangfire job information."
      },
      {
        "name": "Docker",
        "description": "Enables containerization of all services, ensuring consistent deployment and easy scaling."
      },
      {
        "name": "Auth0",
        "description": "Handles secure authentication and authorization for the application."
      },
      {
        "name": "Mailjet",
        "description": "Integrated for sending email notifications to users."
      }
    ],
    "links": {
      "github": "https://github.com/your-repo/task-blaster",
      "demo": "http://localhost:3000"
    },
    "images": [
      "/projects/taskblaster-dashboard.png",
      "/projects/taskblaster-tasks.png"
    ]
  },
  {
    title: "Pizza Lair",
    subtitle: "Your Ultimate Pizza Ordering Experience",
    description: "A comprehensive pizza ordering website that offers multiple ways to explore and order pizzas. The platform features a restaurant-style menu view, a detailed order page with comprehensive pizza descriptions and ingredients, and a special deals section including 2-for-1 offers, family deals, and pizza of the month. The website includes user authentication for registration and login functionality, making it a complete e-commerce solution for pizza ordering.",
    technologies: [
      {
        name: "Django",
        description: "Used as the main web framework for building a robust and scalable backend with built-in admin interface and ORM capabilities."
      },
      {
        name: "PostgreSQL",
        description: "Implemented as the primary database system, hosted on Google Cloud, for storing user data, menu items, and order information."
      },
      {
        name: "Python",
        description: "Core programming language used for backend development and server-side logic."
      },
      {
        name: "JavaScript",
        description: "Utilized for frontend interactivity and dynamic user interface features."
      },
      {
        name: "HTML/CSS",
        description: "Used for structuring and styling the website's frontend, creating a responsive and user-friendly interface."
      }
    ],
    links: {
      github: "https://github.com/svavarbjarki/PizzaLair_9"
    },
    images: ["/static/images/menu-view.png"]
  },
  {
    title: "Doctor Cinema",
    subtitle: "Your Ultimate Icelandic Cinema Companion",
    description: "A React Native mobile application that provides real-time information about movies and showtimes across cinemas in Iceland. The app connects to the kvikmyndir.is API to fetch and display current movie listings, cinema locations, and showtime information. Users can browse cinemas, view detailed movie information including plots, genres, and trailers, and purchase tickets directly through the app.",
    technologies: [
      {
        name: "React Native",
        description: "Used as the primary framework for building a cross-platform mobile application with native UI components and smooth performance."
      },
      {
        name: "Redux Toolkit",
        description: "Implemented for state management, handling cinema, movie, and user data across the application."
      },
      {
        name: "React Navigation",
        description: "Used for implementing navigation between different screens with a stack navigator, providing a seamless user experience."
      },
      {
        name: "Expo",
        description: "Utilized as the development platform for easier building and testing of the React Native application."
      },
      {
        name: "kvikmyndir.is API",
        description: "External API integration for fetching real-time movie and cinema data from Icelandic theaters."
      }
    ],
    links: {
      github: "https://github.com/svavarbjarki/DoctorCinema"
    },
    images: ["/projects/fakenewsanalysis"]
  },
  {
    title: "Tic-Tackity-Toe",
    subtitle: "Real-time Multiplayer Tic-tac-toe Game",
    description: "A modern, real-time multiplayer implementation of the classic Tic-tac-toe game. This project features a responsive web application that allows users to play against each other in real-time, with features including user authentication, game state management, and live updates using WebSocket technology. The application provides a seamless gaming experience with a clean, modern UI built using UIkit framework.",
    technologies: [
      {
        name: "React",
        description: "Used as the frontend framework to build a responsive and interactive user interface with component-based architecture."
      },
      {
        name: "TypeScript",
        description: "Implemented throughout the project to ensure type safety and better code maintainability in both frontend and backend."
      },
      {
        name: "Socket.IO",
        description: "Enables real-time bidirectional communication between the client and server for live game updates and player interactions."
      },
      {
        name: "Express",
        description: "Powering the backend server to handle API requests and manage game sessions."
      },
      {
        name: "Redux Toolkit",
        description: "Used for state management to handle game state, user authentication, and application data efficiently."
      },
      {
        name: "UIkit",
        description: "Provides a modern, responsive UI framework for creating a polished and professional look."
      }
    ],
    links: {
      github: "https://github.com/svava/Vefforritun2-final-project"
    },
    images: ["/projects/tic-tackity-toe-gameplay.png"]
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Svavar B.</title>
        <meta name="description" content="Explore my portfolio of web development and game design projects" />
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

          <div className={styles.content}>
            {projects.map((project, index) => (
              <motion.section
                key={project.title}
                className={styles.projectSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.projectHeader}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <h3 className={styles.projectSubtitle}>{project.subtitle}</h3>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectDescription}>
                    {project.description}
                  </div>

                  <div className={styles.technologiesGrid}>
                    {project.technologies.map((tech) => (
                      <div key={tech.name} className={styles.technologyCard}>
                        <h4 className={styles.technologyName}>{tech.name}</h4>
                        <p className={styles.technologyDescription}>{tech.description}</p>
                      </div>
                    ))}
                  </div>

                  {project.links.github && project.links.github !== "Private" && (
                    <div className={styles.projectLinks}>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </motion.section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
  