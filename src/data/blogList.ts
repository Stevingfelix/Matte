import { ROUTES } from "./routes";

export interface ListPost {
  title: string;
  image: string;
  text: string;
  tags: string[];
  to: string;
}

const TEXT =
  "In today’s fast-paced market, competition is tougher than ever. Businesses must find ways to stand out and capture customer attention. This is where strong branding becomesessential. Branding goes beyond logos or catchy phrases";

export const listPosts: ListPost[] = [
  { title: "Why Strong Branding Is Crucial For Long-Term Business Success", image: "blog-l-1-1.jpg" },
  { title: "What Is Content Marketing? How It Works in 2025", image: "blog-l-1-2.jpg" },
  { title: "How to Track Website Metrics With One Free, Privacy-Friendly Tool", image: "blog-l-1-3.jpg" },
  { title: "Does Ranking Higher on Google Mean You’ll Get Cited in AI Overviews?", image: "blog-l-1-4.jpg" },
  { title: "Various ideas and creative concepts based on market research", image: "blog-l-1-5.jpg" },
].map((p) => ({ ...p, text: TEXT, tags: ["Marketing", "design"], to: ROUTES.blogDetailsRight }));

export const sidebarCategories = ["Chatbot", "Agency", "Digital Agency", "Marketing", "Technology", "Lifestyle"];

export const sidebarLatestPosts = ["lp-1-1.jpg", "lp-1-2.jpg", "lp-1-3.jpg"].map((image) => ({
  image,
  date: "25 Dec 2025",
  title: "How To Compare Work Management Software",
}));

export const sidebarTags = ["News", "Corporate", "Design", "Business", "Consulting", "chatbot", "Marketing", "Artificial"];
