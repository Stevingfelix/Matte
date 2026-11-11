import { ROUTES } from "./routes";

export interface BrandSocial {
  icon: string;
  label: string;
  href: string;
}

export interface BrandConfig {
  id: "matte" | "grumpy" | "default";
  name: string;
  letters: string[];
  homePath: string;
  email: string;
  phone: string;
  displayPhone: string;
  address: string;
  hours: [string, string];
  ctaLine: string;
  aboutSidebar: string;
  socials: BrandSocial[];
  useImageLogo?: boolean;
}

export const BRANDS: Record<BrandConfig["id"], BrandConfig> = {
  matte: {
    id: "matte",
    name: "Matte",
    letters: ["M", "A", "T", "T", "E"],
    homePath: ROUTES.home3,
    email: "hello@matte.studio",
    phone: "+14158904312",
    displayPhone: "(+1) 415 890 4312",
    address: "420 Howard St, Suite 300, San Francisco, CA",
    hours: ["Mon—Fri", "9am—6pm"],
    ctaLine: "Ready to turn your next big idea into a refined digital product?",
    aboutSidebar:
      "Matte is an independent digital strategy and creative studio. We partner with ambitious teams to craft focused brand systems, high-converting web experiences, and measurable growth campaigns.",
    socials: [
      { icon: "icon-facebook", label: "Facebook", href: "https://facebook.com" },
      { icon: "icon-twitter", label: "Twitter", href: "https://x.com" },
      { icon: "icon-linkedin", label: "Linkedin", href: "https://linkedin.com" },
      { icon: "icon-youtube", label: "Instagram", href: "https://instagram.com" },
    ],
  },
  grumpy: {
    id: "grumpy",
    name: "Grumpy",
    letters: ["G", "R", "U", "M", "P", "Y"],
    homePath: ROUTES.home4OnePage,
    email: "hello@grumpy.design",
    phone: "+12125550194",
    displayPhone: "(+1) 212 555 0194",
    address: "88 Mercer St, Floor 4, New York, NY",
    hours: ["Mon—Fri", "10am—7pm"],
    ctaLine: "Shipping an AI product or SaaS platform? Let's design it right.",
    aboutSidebar:
      "Grumpy is an AI Product & SaaS UX/UI Design Agency. We turn complex models, dense dashboards, and 0→1 workflows into intuitive interfaces users actually enjoy.",
    socials: [
      { icon: "icon-facebook", label: "Facebook", href: "https://facebook.com" },
      { icon: "icon-twitter", label: "Twitter", href: "https://x.com" },
      { icon: "icon-linkedin", label: "Linkedin", href: "https://linkedin.com" },
      { icon: "icon-youtube", label: "Instagram", href: "https://instagram.com" },
    ],
  },
  default: {
    id: "default",
    name: "Pikiz",
    letters: ["P", "I", "K", "I", "Z"],
    homePath: ROUTES.home,
    email: "pikizhelp@Gmail.com",
    phone: "+121-616700-51",
    displayPhone: "(+121) 616700 51",
    address: "14 Wall St #15, New York, NY",
    hours: ["Mon—Fri", "10am—7pm"],
    ctaLine: "Ready to bring your ideas to life?",
    aboutSidebar:
      "We are a digital product and brand studio combining research, strategy, and visual craft to help modern companies stand out.",
    socials: [
      { icon: "icon-facebook", label: "Facebook", href: "https://facebook.com" },
      { icon: "icon-twitter", label: "Twitter", href: "https://x.com" },
      { icon: "icon-linkedin", label: "Linkedin", href: "https://linkedin.com" },
      { icon: "icon-youtube", label: "Youtube", href: "https://youtube.com" },
    ],
    useImageLogo: true,
  },
};

