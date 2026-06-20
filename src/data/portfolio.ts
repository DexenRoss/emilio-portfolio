export const profile = {
  name: "Emilio Caballero",
  role: "Software Engineer",
  headline:
    "Building AI-powered applications, automation systems, and modern web platforms.",
  summary:
    "I design and build intelligent systems that combine modern web technologies, automation, and applied artificial intelligence to solve real-world problems.",
  email: "choumw.emi@gmail.com",
  location: "Mexico City, Mexico",
  cellphone: "+52 777 205 4417",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
];

export const projects = [
  {
    name: "PhaseolusDB",
    description:
      "Scientific web platform for organizing, managing, and visualizing research-related information.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    accent: "from-violet-400 to-indigo-400",
  },
  {
    name: "Rehiletemx.com",
    description:
      "Dynamic editorial platform for RehileteMX, featuring reviews, specials, admin publishing tools, responsive design, and structured cultural content management.",
    stack: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "React", "Tailwind CSS", "Docker","Node.js", "Git/GitHub"],
    accent: "from-sky-400 to-purple-400",
  },
  {
    name: "AI Quotation Assistant",
    description:
      "Automation system that processes client requests, extracts structured information with AI, checks service catalogs, and generates quotation drafts.",
    stack: ["OpenAI API", "Google Apps Script", "Gmail", "Google Sheets"],
    accent: "from-indigo-400 to-sky-300",
  },
  {
    name: "Osteosarcoma Classification",
    description:
      "Computer vision project focused on histopathological image classification using deep learning models.",
    stack: ["Python", "PyTorch", "YOLO", "SLURM", "Computer Vision"],
    accent: "from-fuchsia-300 to-violet-400",
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    category: "AI & Data",
    items: ["Python", "PyTorch", "YOLO", "OpenAI API"],
  },
  {
    category: "Tools",
    items: ["Docker", "Linux", "GitHub", "WSL", "Apps Script"],
  },
];

export const experience = [
  {
    title: "Software Developer / Independent Projects",
    period: "2025 - Present",
    description:
      "Building full stack applications, AI-powered tools, and automation systems for real workflows, scientific projects, and productivity use cases.",
  },
  {
    title: "Computer Science Student",
    period: "Universidad Nacional Autónoma de México",
    description:
      "Studying computer science foundations while applying software engineering, data, and AI concepts in production-minded projects.",
  },
];

export const metrics = [
  { value: "4", label: "Core project areas" },
  { value: "AI", label: "Applied automation focus" },
  { value: "Full stack", label: "Product engineering" },
];
