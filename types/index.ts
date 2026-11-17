export type ProjectCategory = 'Enterprise' | 'Banking' | 'E-commerce';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  category: ProjectCategory;
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

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
