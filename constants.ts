import { 
  Code2, 
  Layout, 
  Database, 
  Server, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Smartphone,
  Zap,
  ShieldCheck
} from "lucide-react";
import { Project, Skill, NavItem, SocialLink, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nova Fintech Dashboard",
    category: "Web Application",
    description: "A high-performance financial analytics dashboard processing real-time market data with sub-second latency.",
    image: "https://picsum.photos/800/600?random=1",
    techStack: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    link: "#",
  },
  {
    id: 2,
    title: "Lumina E-Commerce",
    category: "E-Commerce",
    description: "A headless luxury e-commerce platform featuring 3D product previews and AI-driven recommendations.",
    image: "https://picsum.photos/800/600?random=2",
    techStack: ["React", "Tailwind", "Shopify API", "Three.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Nexus AI Workspace",
    category: "SaaS Platform",
    description: "Collaborative workspace tool integrating generative AI for automated document summarization and drafting.",
    image: "https://picsum.photos/800/600?random=3",
    techStack: ["Vue.js", "Python", "FastAPI", "OpenAI"],
    link: "#",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO",
    company: "FinTech Global",
    content: "Euro Dev transformed our legacy infrastructure into a modern, high-performance platform. Their attention to detail and technical expertise are unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "StartUp Inc.",
    content: "Working with this team was a game-changer. They didn't just build what we asked for; they improved upon our initial concepts and delivered a superior product.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Director",
    company: "Creative Solutions",
    content: "Exceptional design implementation and rock-solid code. The project was delivered on time and exceeded all our performance KPIs. Highly recommended.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", icon: Code2, level: 98, category: "Frontend" },
  { name: "TypeScript", icon: Layout, level: 95, category: "Frontend" },
  { name: "Node.js", icon: Server, level: 90, category: "Backend" },
  { name: "PostgreSQL", icon: Database, level: 88, category: "Backend" },
  { name: "AWS / Cloud", icon: Globe, level: 85, category: "Tools" },
  { name: "System Design", icon: Cpu, level: 92, category: "Tools" },
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building blazing fast, SEO-optimized web applications using modern frameworks.",
    icon: Globe
  },
  {
    title: "Mobile Solutions",
    description: "Cross-platform mobile apps that provide native-like performance and experience.",
    icon: Smartphone
  },
  {
    title: "Performance Optimization",
    description: "Auditing and improving application speed to boost conversion rates and SEO.",
    icon: Zap
  },
  {
    title: "Secure Architecture",
    description: "Implementing bank-grade security protocols to protect user data and privacy.",
    icon: ShieldCheck
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "#", icon: Github },
  { platform: "LinkedIn", url: "#", icon: Linkedin },
  { platform: "Twitter", url: "#", icon: Twitter },
  { platform: "Email", url: "mailto:contact@eurodev.com", icon: Mail },
];