import { ROUTES } from "./routes";

export interface BlogPostTwo {
  title: string;
  image: string;
  tags: string[];
  text: string;
  to: string;
}

/** Home two & three "Article" cards */
export const blogPostsTwo: BlogPostTwo[] = [
  {
    title: "What Is Content Marketing? How It Works in 2025",
    image: "blog-2-1.jpg",
    tags: ["Marketing", "Strategy"],
    text: "How editorial positioning, search intent mapping, and modular distribution turn content into a compounding acquisition channel.",
    to: ROUTES.blogDetailsRight,
  },
  {
    title: "The Role of a Creative Studio in Scaling Your Brand",
    image: "blog-2-2.jpg",
    tags: ["Branding", "Design"],
    text: "Why cohesive visual systems and high-clarity landing experiences lower customer acquisition costs as your company grows.",
    to: ROUTES.blogDetailsRight,
  },
];
