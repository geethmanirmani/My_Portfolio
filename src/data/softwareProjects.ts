export interface SoftwareProject {
  id: number;
  title: string;
  category: string;
  year: string;
  technologies: string[];
  description: string;
  features: string[];
  status: string;
  accentColor: string; // Gradient color theme for high-end preview
}

export const softwareProjects: SoftwareProject[] = [
  {
    id: 1,
    title: "NOVA INVENTORY",
    category: "INVENTORY MANAGEMENT SYSTEM",
    year: "2026",
    technologies: ["Java", "MySQL", "Object-Oriented Programming"],
    description: "A desktop inventory management system designed to help small businesses manage products, stock levels, and warehouse operations. This serves as the blueprint for her Clothing Warehouse Management System.",
    features: [
      "Product Management",
      "Stock Tracking",
      "Search",
      "Inventory Updates",
      "Database Management"
    ],
    status: "ACADEMIC PROJECT / PLACEHOLDER",
    accentColor: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)" // Cyan to Blue
  },
  {
    id: 2,
    title: "LUMA STUDENT PORTAL",
    category: "EDUCATION / WEB APPLICATION",
    year: "2025",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    description: "A student management platform designed to organize student information, academic activities, and communication between students and administrators.",
    features: [
      "Student Profiles",
      "Course Information",
      "Announcements",
      "Basic Dashboard",
      "Database Management"
    ],
    status: "CONCEPT PROJECT",
    accentColor: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)" // Purple to Pink
  },
  {
    id: 3,
    title: "ORBIT TASK MANAGER",
    category: "PRODUCTIVITY / PYTHON",
    year: "2025",
    technologies: ["Python", "File Handling", "Object-Oriented Programming"],
    description: "A lightweight task management application designed to help users organize daily activities, priorities, and deadlines.",
    features: [
      "Task Creation",
      "Priority Management",
      "Deadlines",
      "Task Completion",
      "Search"
    ],
    status: "CONCEPT PROJECT",
    accentColor: "linear-gradient(135deg, #10b981 0%, #059669 100%)" // Emerald to Green
  },
  {
    id: 4,
    title: "PIXEL QUEST",
    category: "CONSOLE GAME",
    year: "2025",
    technologies: ["C++", "Object-Oriented Programming", "Algorithms"],
    description: "A console-based adventure game created to explore programming fundamentals, game logic, and interactive user input. Fits directly with her C++ console game project.",
    features: [
      "Player Movement",
      "Game Logic",
      "Score System",
      "Levels",
      "Console Interface"
    ],
    status: "ACADEMIC / CONCEPT PROJECT",
    accentColor: "linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)" // Amber to Rose
  },
  {
    id: 5,
    title: "FLOW SUPPLY CHAIN",
    category: "BUSINESS TECHNOLOGY",
    year: "2026",
    technologies: ["Java", "MySQL", "Database Design", "System Analysis"],
    description: "A conceptual supply chain management system designed to visualize inventory, suppliers, orders, and logistics operations. Connects business analysis directly with technology.",
    features: [
      "Supplier Management",
      "Order Management",
      "Inventory",
      "Logistics Tracking",
      "Reports"
    ],
    status: "CONCEPT PROJECT",
    accentColor: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)" // Blue to Indigo
  }
];
