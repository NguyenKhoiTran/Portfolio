export interface SkillCategory {
  title: string;
  icon: string; // Name of the Lucide icon to render
  skills: string[];
  index: string; // e.g. "01", "02", "03", "04"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string;
  solutions: string;
  results: string;
  githubUrl?: string;
  demoUrl?: string;
  thumbnailUrl?: string; // Optional image URL
  color: string; // Tailwind class color for the card's background hover state or border accent
  badgeColor: string; // Tailwind class color for technology badges
}

export interface Experience {
  id: string;
  duration: string;
  company: string;
  position: string;
  description: string[];
}

export interface JourneyMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
}
