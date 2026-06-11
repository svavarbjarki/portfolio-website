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

export const projects = [
  {
    name: "Meal Plan Generator",
    blurb: "Personalized meal plans generated from a user's goals and preferences.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Auth0"],
    link: "https://mealplan.svavarbjarki.com",
    linkLabel: "Live Demo",
  },
  {
    name: "Fake News Analysis System",
    blurb: "AI-powered news authenticity verification with semantic similarity scoring.",
    tech: ["Next.js", "Tailwind CSS", "ASP.NET Core 8", "PostgreSQL", "EF Core", "Docker", "MinIO", "AI/ML"],
    link: "https://hdl.handle.net/1946/50437",
    linkLabel: "Paper",
  },
  {
    name: "TaskBlaster",
    blurb: "Modern task management for teams with real-time notifications.",
    tech: ["Next.js", "Chakra UI", ".NET Core", "PostgreSQL", "Docker", "Auth0", "Mailjet"],
    link: null,
    linkLabel: null,
  },
  {
    name: "Pizza Lair",
    blurb: "Restaurant-style pizza ordering experience with full auth and checkout.",
    tech: ["Django", "PostgreSQL", "Python", "JavaScript", "HTML/CSS"],
    link: "https://github.com/svavarbjarki/PizzaLair_9",
    linkLabel: "GitHub",
  },
  {
    name: "Doctor Cinema",
    blurb: "Icelandic cinema companion with live listings, built in React Native.",
    tech: ["React Native", "Redux Toolkit", "React Navigation", "Expo", "kvikmyndir.is API"],
    link: "https://github.com/svavarbjarki/DoctorCinema",
    linkLabel: "GitHub",
  },
  {
    name: "Tic-Tackity-Toe",
    blurb: "Real-time multiplayer tic-tac-toe with live state sync.",
    tech: ["React", "TypeScript", "Socket.IO", "Express", "Redux Toolkit", "UIkit"],
    link: "https://github.com/svava/Vefforritun2-final-project",
    linkLabel: "GitHub",
  },
];

export const games = [
  {
    name: "Anubis Tomb of Terror",
    blurb: "3D zombie shooter made in Unity in 3 weeks, for a school project.",
    tags: ["Unity", "Zombie Shooter", "3D", "3-Weeks"],
    year: "2024",
    link: "https://sweisen.itch.io/anubis-tomb-of-terror",
  },
  {
    name: "Moon Bounce",
    blurb: "2D game made in Unity in 3 days, for a school project.",
    tags: ["Unity", "2D", "Game", "3-Days"],
    year: "2024",
    link: "https://sweisen.itch.io/moon-bounce",
  },
  {
    name: "Circle Sort",
    blurb: "2D game made in Unity where you sort the circles by color — built with only one sprite.",
    tags: ["Unity", "2D", "Game", "One Sprite"],
    year: "2025",
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

export const commands = [
  { name: "help", desc: "list all available commands" },
  { name: "whoami", desc: "name and role" },
  { name: "about", desc: "a short bio" },
  { name: "skills", desc: "the tech stack by category" },
  { name: "projects", desc: "selected projects, one line each" },
  { name: "games", desc: "games built in Unity" },
  { name: "contact", desc: "email, GitHub, LinkedIn" },
  { name: "clear", desc: "clear the terminal output" },
  { name: "secret", desc: "???" },
];
