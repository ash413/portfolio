// types/project.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    technologies?: string[]; // Adding technologies used
    github?: string; // Optional GitHub link
    category?: 'web' | 'mobile' | 'backend' | 'full-stack'; // Optional categorization
  }