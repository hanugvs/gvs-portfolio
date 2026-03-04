export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  impactPoints: string[];
}

export interface Skill {
  category: string;
  skills: string[];
}