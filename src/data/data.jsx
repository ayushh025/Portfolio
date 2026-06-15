import { DiVisualstudio } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-600" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

export const projects = [
  {
    name: "💼 Employee Task Management System",
    technologies: [
      "React JS",
      "Context API",
      "JavaScript (ES6+)",
      "Tailwind CSS",
    ],
    description:
      "This project allows an Admin to assign tasks to employees and employees to manage their tasks by accepting, completing, or marking them as failed. All data is stored using LocalStorage, so the app works without any backend.",
    gitHub: "https://github.com/ayushh025/Employee-management",
    liveLink: "https://employee-management-ayushh025.vercel.app",
  },
  {
    name: "🌤️ Weather App",
    technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    description:
      "A modern and responsive weather application built using HTML, CSS, and JavaScript. It provides real-time weather updates along with hourly forecasts using OpenWeather API.",
    gitHub: "https://github.com/ayushh025/Weather-app",
    liveLink: "https://weather-app-ayushh-62.vercel.app",
  },
  {
    name: "📝 Task Management App",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage API"],
    description:
      "A simple and responsive Task Management Application built using HTML, CSS, and JavaScript. This app helps users create, edit, delete, and filter tasks with priority levels while storing data in Local Storage.",
    gitHub: "https://github.com/ayushh025/Task-Management-",
    liveLink: "https://task-management-ayushh025.vercel.app",
  },
  {
    name: "🖼️ Image Gallery App",
    technologies: ["React.js", "Axios", "Tailwind CSS", "JavaScript"],
    description:
      "A modern and responsive image gallery built using React.js. This project demonstrates API integration, pagination, and dynamic UI updates with a smooth user experience.",
    gitHub: "https://github.com/ayushh025/Image-Gallery-App",
    liveLink: "https://image-gallery-ayushh025.vercel.app",
  },
  {
    name: "🎨 Image Editor Web App",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A simple and interactive Image Editor Web Application built using HTML, CSS, and JavaScript. This project allows users to upload an image, apply multiple filters, use preset styles, and download the edited image.",
    gitHub: "https://github.com/ayushh025/Image-Editor",
    liveLink: "https://image-editor-ayushh025.vercel.app/",
  },
  {
    name: "📋 Kanban Task Manager",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage API"],
    description:
      "A simple and interactive Kanban Board built using HTML, CSS, and JavaScript. This project allows users to manage tasks efficiently with drag-and-drop functionality and persistent storage.",
    gitHub: "https://github.com/ayushh025/kanban-board",
    liveLink: "https://kanbanboard-ayushh025.vercel.app",
  },
  {
    name: "❓ Quiz App",
    technologies: ["HTML5", "CSS3", "TypeScript"],
    description:
      "Built a dynamic Quiz Application using TypeScript with timed quizzes, answer persistence, and flexible navigation between questions. Includes automatic scoring and a detailed results dashboard highlighting correct, incorrect, and unanswered responses.",
    gitHub: "https://github.com/ayushh025/Quiz",
    liveLink: "https://quiz-ayush.vercel.app",
  },
  {
    name: "🍽️ Restaurant Website",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    description:
      "A responsive multi-page restaurant website built with HTML, CSS, and Bootstrap. Includes 4 pages — Home, About Us, Explore Food, and Reviews — all connected through the navigation bar.",
    gitHub: "https://github.com/ayushh025/Restaurant_Web",
    liveLink: "https://restaurant-web-ayush.vercel.app",
  },
  {
    name: "🛒 Blinkit Clone",
    technologies: ["HTML5", "CSS3", "Media queries"],
    description:
      "A responsive Blinkit website clone built using HTML, CSS, and media queries. Created for practice and to improve responsive web design skills.",
    gitHub: "https://github.com/ayushh025/blinkit_clone",
    liveLink: "https://blinkit-clone-ayush.vercel.app",
  },
];
