import { ROUTES } from "./routes";

const LOREM_SHORT = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const SECTION_INTRO =
  "Our services are designed to craft impactful digital solutions while addressing your problems through strategy, innovation, and analysis";

export const faqs = [
  {
    title: "How do I contact you for inquiries or collaborations?",
    content: "Reach out anytime via email or our contact page with your project goals, timeline, and scope. We respond within one business day to schedule an introductory discovery call.",
  },
  {
    title: "What does your studio specialize in?",
    content: "We combine brand strategy, UX/UI product design, web development, and performance marketing to launch cohesive digital experiences that drive measurable growth.",
  },
  {
    title: "What is included in your digital design & marketing packages?",
    content: "Every engagement covers discovery research, visual direction, responsive UI systems, analytics instrumentation, and launch support tailored to your growth stage.",
  },
  {
    title: "Can you create content and campaign assets for our channels?",
    content: "Yes—our team produces campaign visuals, landing pages, editorial copy, and social creative kits aligned with your brand guidelines.",
  },
];

/** five-question list used by the "faq four" blocks */
export const faqsFive = [
  ...faqs,
  {
    title: "What makes your design process unique?",
    content: "We work in tight, transparent weekly sprints—pairing senior designers and strategists directly with your team so you ship faster without sacrificing craft.",
  },
];

export interface Project {
  title: string;
  year: string;
  tag: string;
  image: string;
  to?: string;
}

/** Home one "recent works" columns */
export const projectsLeft: Project[] = [
  { title: "Panda Automap", year: "2025", tag: "Development", image: "project-1-1.jpg" },
  { title: "Sailor Product Branding", year: "2024", tag: "Development", image: "project-1-3.jpg" },
  { title: "Web Design", year: "2021", tag: "UI/UX", image: "project-1-5.jpg" },
];
export const projectsRight: Project[] = [
  { title: "Panda Automap", year: "2025", tag: "Development", image: "project-1-2.jpg" },
  { title: "Panda Automap", year: "2025", tag: "Development", image: "project-1-4.jpg" },
  { title: "Panda Automap", year: "2025", tag: "Development", image: "project-1-6.jpg" },
];

export interface ServiceItem {
  title: string;
  text: string;
  image: string;
  tags: string[];
  to: string;
}

export const services: ServiceItem[] = [
  { title: "Digital Marketing", image: "service-1-1.jpg", text: LOREM_SHORT, tags: ["Web design", "design"], to: ROUTES.serviceResearch },
  { title: "Web design", image: "service-1-2.jpg", text: LOREM_SHORT, tags: ["Web design", "design"], to: ROUTES.serviceResearch },
  { title: "Development", image: "service-1-3.jpg", text: LOREM_SHORT, tags: ["Web design", "design"], to: ROUTES.serviceResearch },
  { title: "Branding", image: "service-1-4.jpg", text: LOREM_SHORT, tags: ["Web design", "design"], to: ROUTES.serviceResearch },
  { title: "Design System", image: "service-1-5.jpg", text: LOREM_SHORT, tags: ["Web design", "design"], to: ROUTES.serviceResearch },
];

export interface BlogPost {
  title: string;
  image: string;
  tags: string[];
  text: string;
  to: string;
}

export const blogPosts: BlogPost[] = [
  { title: "What Is Content\nMarketing? How It Works in 2025", image: "blog-1-1.jpg", tags: ["Marketing", "design"], text: LOREM_SHORT, to: ROUTES.blogDetailsRight },
  { title: "Can You Trust What AI Tells You About PPC? We Tested It!", image: "blog-1-2.jpg", tags: ["Marketing", "design"], text: LOREM_SHORT, to: ROUTES.blogDetailsRight },
  { title: "90+ May Marketing Ideas (& Examples) for Any Business or Budget", image: "blog-1-3.jpg", tags: ["Marketing", "design"], text: LOREM_SHORT, to: ROUTES.blogDetailsRight },
];

export interface Testimonial {
  name: string;
  designation: string;
  text: string;
}

const TESTI_TEXT =
  "The team has been by our side for years – and as their scope has grown, so has the success they’ve been able to drive for the USO. ";

export const testimonials: Testimonial[] = [
  { name: "Kwame Camila", designation: "Manager, Employee Charity Group ", text: TESTI_TEXT },
  { name: "Diego Alejandro", designation: "Manager, Employee Charity Group ", text: TESTI_TEXT },
  { name: "Kwame Camila", designation: "Manager, Employee Charity Group ", text: TESTI_TEXT },
  { name: "Diego Alejandro", designation: "Manager, Employee Charity Group ", text: TESTI_TEXT },
];

export const heroServiceLinks = [
  { label: "Web Development", to: ROUTES.serviceResearch },
  { label: "UX/UI Design", to: ROUTES.serviceBrand },
  { label: "Brand Identity", to: ROUTES.serviceCommunication },
  { label: "Digital Marketing", to: ROUTES.serviceConsultation },
];

export const socialLinks = [
  { icon: "icon-facebook", label: "Facebook", href: "https://facebook.com" },
  { icon: "icon-twitter", label: "Twitter", href: "https://twitter.com" },
  { icon: "icon-linkedin", label: "Linkedin", href: "https://linkedin.com" },
];

export const marqueeItems = ["Feature", "Design", "Marketing", "Digital Work"];
