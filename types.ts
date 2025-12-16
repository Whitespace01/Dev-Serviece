import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}