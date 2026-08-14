export interface CreativeProject {
  id: number;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  videoUrl?: string;
  thumbnailGradient: string; // Gradient accent for premium card look
}

export const creativeProjects: CreativeProject[] = [
  {
    id: 1,
    title: "CINEMATIC STORY",
    category: "Videography / Narrative Film",
    year: "2026",
    role: "Director & Lead Editor",
    description: "A visually immersive narrative piece exploring light, shadows, and human emotion in urban landscapes.",
    thumbnailGradient: "linear-gradient(135deg, #1e1e24 0%, #4f46e5 100%)"
  },
  {
    id: 2,
    title: "EVENT FILM",
    category: "Videography & Creative Highlight",
    year: "2025",
    role: "Cinematographer",
    description: "A fast-paced, high-energy event recap video capturing split-second actions and emotions.",
    thumbnailGradient: "linear-gradient(135deg, #121214 0%, #db2777 100%)"
  },
  {
    id: 3,
    title: "CREATIVE VISUAL",
    category: "Creative Direction & Art Film",
    year: "2025",
    role: "Visual Designer & Storyteller",
    description: "An abstract experimental visual designed to push the boundaries of post-production color grading.",
    thumbnailGradient: "linear-gradient(135deg, #18181b 0%, #0d9488 100%)"
  },
  {
    id: 4,
    title: "BRAND STORY",
    category: "Commercial Content / Videography",
    year: "2026",
    role: "Creative Director",
    description: "A professional branding story crafted to highlight the philosophy, dedication, and process of a local creator.",
    thumbnailGradient: "linear-gradient(135deg, #1c1917 0%, #ea580c 100%)"
  }
];
