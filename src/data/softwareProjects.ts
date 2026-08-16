export interface SoftwareProject {
  id: number;
  title: string;
  category: string;
  year: string;
  technologies: string[];
  description: string;
  features: string[];
  status: string;
  accentColor: string;
  githubUrl?: string;
  images?: string[];
}

export const softwareProjects: SoftwareProject[] = [
  {
    id: 1,
    title: "NEUROMATCH",
    category: "C++ CONSOLE GAME / MEMORY PUZZLE",
    year: "2025",
    technologies: [
      "C++",
      "File Handling (.txt)",
      "Vectors & Structs",
      "Algorithms",
      "Git & GitHub"
    ],
    description: "A C++ console-based memory card game designed to improve focus and short-term memory. Players flip and match card pairs on a 4x4 grid while aiming to complete the game using the fewest moves possible. Developed to strengthen understanding of core C++ concepts such as structures, vectors, loops, conditionals, file handling, and interactive user menu systems.",
    features: [
      "Console-based interactive memory card game in C++",
      "Randomly shuffled 4x4 memory board for a new experience every play",
      "Move counter to track and evaluate player performance",
      "High score system stored persistently using C++ file handling (.txt file)",
      "Input validation for invalid choices or already flipped cards",
      "Simple, clear instructions with an interactive console menu system"
    ],
    status: "COMPLETED PROJECT",
    accentColor: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    githubUrl: "https://github.com/madhusith/Neuro-Match",
    images: [
      "/projects/neuromatch.jpg"
    ]
  },
  {
    id: 2,
    title: "STORE MANAGEMENT SYSTEM",
    category: "JAVA & MYSQL DESKTOP SYSTEM",
    year: "2025",
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "Object-Oriented Programming (OOP)",
      "Layered DAO Architecture",
      "Git & GitHub"
    ],
    description: "A comprehensive Java-based Store Management System designed and developed as part of an Object-Oriented Programming module. Built using core OOP principles (encapsulation, abstraction, inheritance, polymorphism) and a layered DAO architecture to ensure maximum scalability, maintainability, and security.",
    features: [
      "Role-based dashboards (Admin, Manager, Staff)",
      "User, employee, customer & supplier management",
      "Inventory and stock management",
      "Billing and payment system with automated bill generation",
      "Advanced refund handling (partial & multiple refunds)",
      "Secure authentication and authorization",
      "Interactive Java Swing GUI integrated with MySQL database backend"
    ],
    status: "COMPLETED ACADEMIC PROJECT",
    accentColor: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
    githubUrl: "https://github.com/Harshana-adhi/clothing_warehouse_OOP-Project-year-1-sem-2",
    images: [
      "/projects/store-login.jpg",
      "/projects/store-billing.jpg",
      "/projects/store-refund.jpg"
    ]
  }
];
