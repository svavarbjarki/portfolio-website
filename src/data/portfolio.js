// Single source of truth for the portfolio content.
// Used by both the interactive terminal and the visual sections so they never drift.

export const identity = {
  name: "Svavar Bjarki",
  role: "Computer Science Graduate · Aspiring Software Developer · Hobby Game Developer",
  location: "Kópavogur, Iceland",
  handle: "svavar",
};

// Bio copy preserved from the original About page.
export const aboutText =
  "I'm a recent Computer Science graduate from Reykjavík University (2025), passionate about programming and game development. I enjoy turning ideas into polished, interactive experiences. Currently I'm focused on backend, full-stack, and game development, based in Kópavogur, Iceland.";

export const skillCategories = [
  {
    label: "Programming Languages",
    items: ["Python", "JavaScript/TypeScript", "C#", "C++", "C", "HTML", "CSS"],
  },
  {
    label: "Web Development",
    items: ["React/Next.js", "Django", "ASP.NET Core", "HTML/CSS"],
  },
  {
    label: "Mobile Development",
    items: ["React Native", "Expo"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Entity Framework Core"],
  },
  {
    label: "Tools & Technologies",
    items: ["Unity", "Docker", "Git/GitHub", "Socket.IO", "Redux Toolkit"],
  },
  {
    label: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Project Management", "Scrum"],
  },
];

// Project status options. Drives the status badge + whether a "visit" link shows.
//   "Live"           → deployed/playable; shows a visit link to `liveUrl`.
//   "In development" → work in progress; GitHub shows "coming soon" until a repo URL is set.
//   "Offline"        → built but not currently hosted.
export const STATUS = {
  LIVE: "Live",
  IN_DEVELOPMENT: "In development",
  OFFLINE: "Offline",
};

// Every project has: slug (detail page), status, liveUrl (or null), github (or null),
// an optional extraLink ({ label, url }), a longDescription, and highlights.
export const projects = [
  {
    name: "Fake News Analysis System",
    slug: "fake-news-analysis",
    blurb: "AI-powered news authenticity verification with semantic similarity scoring.",
    tech: ["Next.js", "Tailwind CSS", "ASP.NET Core 8", "PostgreSQL", "EF Core", "Docker", "MinIO", "AI/ML"],
    status: STATUS.OFFLINE,
    liveUrl: null,
    // TODO: replace with actual GitHub repo URL (or leave null if the repo stays private)
    github: null,
    extraLink: { label: "Read the paper", url: "https://hdl.handle.net/1946/50437" },
    longDescription:
      "Fake News Analysis System detects potential fake news by comparing articles and their contexts. It uses semantic similarity scoring to surface discrepancies between original and modified content, presenting a side-by-side comparison through a modern web interface backed by a containerized ASP.NET Core API.",
    highlights: [
      "Semantic similarity scoring (cosine similarity) to compare article content and context.",
      "Side-by-side comparison UI for spotting discrepancies between versions.",
      "ASP.NET Core 8 backend following clean architecture, containerized with Docker.",
      "Media and file storage handled via MinIO object storage.",
    ],
  },
  {
    name: "World Cup 2026 Predictor",
    slug: "worldcup-predictor",
    blurb: "A prediction game where a friend group forecasts match results before kickoff and competes on a live leaderboard.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    status: STATUS.LIVE,
    liveUrl: "https://worldcup.svavarbjarki.com",
    github: "https://github.com/svavarbjarki/world-cup-2026-predictor",
    longDescription:
      "World Cup 2026 Predictor is a prediction game built for a friend group. Players submit their match predictions before each kickoff, after which submissions lock automatically so picks can't be changed once a game begins. Points are awarded based on prediction accuracy, and a running leaderboard tracks everyone's standings across the entire tournament.",
    highlights: [
      "Scoring logic that awards points based on prediction accuracy — rewarding exact scores more than correct outcomes.",
      "Automatic submission locking that freezes each player's picks at kickoff to keep the game fair.",
      "A leaderboard system that tracks and ranks standings across the whole tournament in real time.",
    ],
  },
  {
    name: "Untitled Bomber Game",
    slug: "bomber-game",
    blurb: "A multiplayer first-person co-op game where players crew a WWII bomber as interdependent stations, with permadeath each mission.",
    tech: ["Unity", "C#", "NGO Networking", "Blender"],
    status: STATUS.IN_DEVELOPMENT,
    liveUrl: null,
    // TODO: replace with actual GitHub repo URL
    github: null,
    longDescription:
      "Untitled Bomber Game is a multiplayer first-person co-op game set inside a WWII aircraft. Each player takes on a crew role tied to a physical station aboard the plane and must coordinate with the rest of the crew to survive a mission. Death is permanent for the duration of a mission, raising the stakes of every decision. The design draws inspiration from Keep Talking and Nobody Explodes, leaning into communication, pressure, and interdependence between players.",
    highlights: [
      "Crew role stations — each player mans a distinct position (pilot, gunner, bombardier, …) with its own responsibilities.",
      "Permadeath per mission, so every crew member's survival genuinely matters.",
      "Accurate player positioning inside a moving aircraft, letting the crew physically inhabit a plane in flight.",
      "Multiplayer built on Unity NGO (Netcode for GameObjects) for synchronized co-op gameplay.",
    ],
  },
  {
    name: "Meal Plan Generator",
    slug: "meal-plan-generator",
    blurb: "Personalized meal plans generated from a user's goals and preferences.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Auth0"],
    status: STATUS.LIVE,
    liveUrl: "https://mealplan.svavarbjarki.com",
    // TODO: replace with actual GitHub repo URL (or leave null if the repo stays private)
    github: null,
    longDescription:
      "Meal Plan Generator is a full-stack web app that builds personalized meal plans from each user's goals and preferences. Users set their targets, and the app generates and adapts plans driven by their input, with authentication handled by Auth0 and data persisted through Prisma and PostgreSQL.",
    highlights: [
      "Personalized plan generation that adapts to each user's goals and dietary preferences.",
      "Full authentication flow powered by Auth0.",
      "Type-safe data layer using Prisma ORM over PostgreSQL.",
    ],
  },
  {
    name: "TaskBlaster",
    slug: "taskblaster",
    blurb: "Modern task management for teams with real-time notifications.",
    tech: ["Next.js", "Chakra UI", ".NET Core", "PostgreSQL", "Docker", "Auth0", "Mailjet"],
    status: STATUS.OFFLINE,
    liveUrl: null,
    // TODO: replace with actual GitHub repo URL (or leave null if the repo stays private)
    github: null,
    longDescription:
      "TaskBlaster is a task management platform for teams, featuring live updates, authentication, and a clean UI. Responsibilities are split across microservices for tasks, notifications, and users, with transactional email delivery handled by Mailjet.",
    highlights: [
      "Real-time task updates so teams stay in sync.",
      "Microservices architecture separating tasks, notifications, and users.",
      "Authentication via Auth0 and transactional email via Mailjet.",
    ],
  },
  {
    name: "Pizza Lair",
    slug: "pizza-lair",
    blurb: "Restaurant-style pizza ordering experience with full auth and checkout.",
    tech: ["Django", "PostgreSQL", "Python", "JavaScript", "HTML/CSS"],
    status: STATUS.OFFLINE,
    liveUrl: null,
    github: "https://github.com/svavarbjarki/PizzaLair_9",
    longDescription:
      "Pizza Lair is a restaurant-style pizza ordering website. It offers a menu view, a detailed order page with full descriptions and ingredients, and special deals like 2-for-1 offers and family bundles — all wrapped in a complete authentication and checkout flow built on Django.",
    highlights: [
      "Restaurant-style menu and a detailed ordering experience.",
      "Special deals: 2-for-1 offers, family bundles, and pizza of the month.",
      "User registration, login, and a full checkout flow.",
    ],
  },
  {
    name: "Doctor Cinema",
    slug: "doctor-cinema",
    blurb: "Icelandic cinema companion with live listings, built in React Native.",
    tech: ["React Native", "Redux Toolkit", "React Navigation", "Expo", "kvikmyndir.is API"],
    status: STATUS.OFFLINE,
    liveUrl: null,
    github: "https://github.com/svavarbjarki/DoctorCinema",
    longDescription:
      "Doctor Cinema is a React Native app that surfaces real-time movie listings and showtimes across cinemas in Iceland, powered by the kvikmyndir.is API. Users browse cinemas, watch trailers, read details, and hand off to ticket purchase.",
    highlights: [
      "Real-time cinema listings and showtimes via the kvikmyndir.is API.",
      "Trailers, plots, and details with a direct ticket-purchase handoff.",
      "State managed with Redux Toolkit across the app.",
    ],
  },
  {
    name: "Tic-Tackity-Toe",
    slug: "tic-tackity-toe",
    blurb: "Real-time multiplayer tic-tac-toe with live state sync.",
    tech: ["React", "TypeScript", "Socket.IO", "Express", "Redux Toolkit", "UIkit"],
    status: STATUS.OFFLINE,
    liveUrl: null,
    github: "https://github.com/svava/Vefforritun2-final-project",
    longDescription:
      "Tic-Tackity-Toe is a real-time multiplayer take on the classic game. Players compete live with synchronized game state over Socket.IO, backed by authentication and an Express server, with a clean UI built in UIkit.",
    highlights: [
      "Real-time multiplayer with live state sync over Socket.IO.",
      "Authentication and game-session management on an Express backend.",
      "State handled with Redux Toolkit.",
    ],
  },
];

// Projects still under active development — kept for reference/reuse.
export const wipProjects = projects.filter((p) => p.status === STATUS.IN_DEVELOPMENT);

// Look up a single project by its detail-page slug.
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

// Games carry a status too: "Live" games link out to itch.io; an "In development"
// game links to its project detail page via `slug`.
export const games = [
  {
    name: "Untitled Bomber Game",
    blurb: "A multiplayer first-person co-op game where players crew a WWII bomber as interdependent stations, with permadeath each mission.",
    tags: ["Unity", "C#", "NGO Networking", "Blender"],
    year: null,
    status: STATUS.IN_DEVELOPMENT,
    slug: "bomber-game", // links to /projects/bomber-game
    link: null,
  },
  {
    name: "Anubis Tomb of Terror",
    blurb: "3D zombie shooter made in Unity in 3 weeks, for a school project.",
    tags: ["Unity", "Zombie Shooter", "3D", "3-Weeks"],
    year: "2024",
    status: STATUS.LIVE,
    link: "https://sweisen.itch.io/anubis-tomb-of-terror",
  },
  {
    name: "Moon Bounce",
    blurb: "2D game made in Unity in 3 days, for a school project.",
    tags: ["Unity", "2D", "Game", "3-Days"],
    year: "2024",
    status: STATUS.LIVE,
    link: "https://sweisen.itch.io/moon-bounce",
  },
  {
    name: "Circle Sort",
    blurb: "2D game made in Unity where you sort the circles by color — built with only one sprite.",
    tags: ["Unity", "2D", "Game", "One Sprite"],
    year: "2025",
    status: STATUS.LIVE,
    link: "https://sweisen.itch.io/cirlce-sort",
  },
];

export const contact = {
  email: "svavarbjarki@gmail.com",
  github: "https://github.com/svavarbjarki",
  githubLabel: "github.com/svavarbjarki",
  linkedin: "https://www.linkedin.com/in/svavar-bjarki-bjarnason-32b2241a1/",
  linkedinLabel: "linkedin.com/in/svavar-bjarki-bjarnason",
};

// GitHub username used by the contribution-activity heatmap.
export const githubUsername = "svavarbjarki";

// Path to the downloadable résumé (see public/resume.pdf — replace with the real PDF).
export const resumeUrl = "/resume.pdf";

export const commands = [
  { name: "help", desc: "list all available commands" },
  { name: "whoami", desc: "name and role" },
  { name: "about", desc: "a short bio" },
  { name: "cv", desc: "a condensed résumé summary" },
  { name: "resume", desc: "link to download my résumé (PDF)" },
  { name: "skills", desc: "the tech stack by category" },
  { name: "projects", desc: "selected projects, one line each" },
  { name: "games", desc: "games built in Unity" },
  { name: "contact", desc: "email, GitHub, LinkedIn" },
  { name: "ls", desc: "list the page sections" },
  { name: "date", desc: "current date and time" },
  { name: "ping", desc: "check the connection" },
  { name: "clear", desc: "clear the terminal output" },
  { name: "secret", desc: "???" },
];
