export const personalInfo = {
  name: "Nikhilesh Ravindra Raut",
  firstName: "Nikhilesh",
  lastName: "Raut",
  role: "Full Stack Developer",
  tagline: "MCA Graduate · MERN Stack · AI-Assisted Dev",
  bio: "MCA 2025 graduate with strong expertise in the MERN stack, RESTful API development, and AI-assisted engineering. I build scalable, production-grade applications with a passion for clean code, smart tooling, and beautiful interfaces.",
  email: "nikhilesh2354@gmail.com",
  github: "https://github.com/Nikhilesh012003",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  location: "Nagpur, Maharashtra",
};

export const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    color: "#00ff88",
    items: ["JavaScript", "Java", "C", "C++", "Async JS"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#00c8ff",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "REST APIs",
      "Auth",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#ff4d6d",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "SQL",
      "ACID",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    color: "#a78bfa",
    items: [
      "Git",
      "Jenkins",
      "Docker",
      "AWS EC2",
      "Prometheus",
      "Grafana",
      "Linux",
      "CI/CD",
    ],
  },
  {
    category: "AI Dev Tools",
    icon: "🤖",
    color: "#fbbf24",
    items: [
      "GitHub Copilot",
      "ChatGPT",
      "Prompt Engineering",
      "LLM Fundamentals",
    ],
  },
  {
    category: "Concepts",
    icon: "🧠",
    color: "#34d399",
    items: [
      "SDLC",
      "DBMS",
      "DSA",
      "Networking",
      "OS",
      "Agile",
      "AI Governance",
    ],
  },
];

export const projects = [
  {
    id: "01",
    category: "Ecommerce",
    name: "PriceForge — Dynamic Pricing Engine",
    description:
      "PriceForge is a full-stack web application that enables dynamic product pricing based on admin-defined rules. The system allows administrators to manage products and pricing rules while users can browse products with automatically updated prices.",
    stack: [
      "Node.js",
      "MongoDB",
      "Gemini API",
      "React",
      "Express",
      "Tailwind",
      "Vite",
    ],
    color: "#00ff88",
    demo: "#",
    github:
      "https://github.com/Nikhilesh012003/PriceForge-Dynamic-Pricing-Engine.git",
    featured: true,
  },
  {
    id: "02",
    category: "Healthcare AI",
    name: "Symptom-to-Medicine AI",
    description:
      "Smart Healthcare Assistant that analyzes patient symptoms and suggests relevant medicines. Presented findings as professional PowerPoint reports to faculty using AI-driven data flow.",
    stack: ["Node.js", "MongoDB", "ChatGPT API", "React", "Express"],
    color: "#00ff88",
    demo: "#",
    github: "https://github.com/Nikhilesh012003/Home-Remedy.git",
    featured: true,
  },
  {
    id: "03",
    category: "Productivity",
    name: "Expense Tracker Application",
    description:
      "Full-featured expense tracking app with category management, monthly summaries, and visual breakdowns. Secure REST API backend with responsive React frontend.",
    stack: ["React", "Express.js", "MongoDB", "JWT Auth", "Chart.js"],
    color: "#00c8ff",
    demo: "#",
    github: "https://github.com/Nikhilesh012003/Expense-Tracker.git",
    featured: false,
  },

  {
    id: "04",
    category: "Full Stack Clone",
    name: "Netflix Clone",
    description:
      "End-to-end Netflix clone with full CI/CD pipeline and cloud deployment. Integrated Prometheus and Grafana for real-time monitoring. Deployed on AWS EC2 with Docker and Jenkins.",
    stack: [
      "React",
      "Node.js",
      "Docker",
      "AWS EC2",
      "Jenkins",
      "Grafana",
      "Prometheus",
    ],
    color: "#ff4d6d",
    demo: "#",
    github: "https://github.com/Nikhilesh012003/Project-Netflix-Clone.git",
    featured: true,
  },
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "Asterisc Technocrat Pvt. Ltd.",
    location: "Nagpur",
    period: "Dec 2024 – Jun 2025",
    bullets: [
      "Designed and implemented RESTful APIs with proper validation, middleware, and structured routing.",
      "Created and optimized MongoDB schemas ensuring efficient querying and data integrity.",
      "Utilized GitHub Copilot and ChatGPT for rapid prototyping, debugging, documentation, and performance improvements.",
      "Participated in code reviews and followed secure coding practices throughout the SDLC.",
      "Tested APIs using Postman and ensured structured, robust error handling.",
    ],
  },
];

export const education = [
  {
    degree: "MCA",
    school: "G.H. Raisoni College of Engineering and Management",
    year: "2023–2025",
    score: "79.8%",
    location: "Nagpur",
  },
  {
    degree: "BSC – IT",
    school: "Prerna College of Commerce",
    year: "2021–2023",
    score: "72%",
    location: "Nagpur",
  },
  {
    degree: "HSC",
    school: "Prerna College of Commerce",
    year: "2018–2020",
    score: "61.85%",
    location: "Nagpur",
  },
  {
    degree: "SSC",
    school: "Shri Rajendra High School",
    year: "2018",
    score: "70.80%",
    location: "Nagpur",
  },
];
